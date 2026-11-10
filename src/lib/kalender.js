/** iCalendar aus Pages-CMS-Einzelterminen, RFC 5545, Europe/Berlin. */
const ZONE = 'Europe/Berlin';
const DATE = /^\d{4}-\d{2}-\d{2}$/;
const TIME = /^([01]\d|2[0-3]):[0-5]\d$/;

function escapeText(value) {
  return String(value ?? '').replace(/\\/g, '\\\\').replace(/\r?\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
}
function stampLocal(date, time) {
  return `${date.replace(/-/g, '')}T${time.replace(':','')}00`;
}
function fold(line) {
  // iCalendar-Faltung nach UTF-8-Oktetten (maximal 75 inklusive Fortsetzungs-Leerzeichen).
  let out = '';
  let bytes = 0;
  for (const char of line) {
    const width = new TextEncoder().encode(char).length;
    if (bytes + width > 75) { out += '\r\n '; bytes = 1; }
    out += char;
    bytes += width;
  }
  return out;
}
function addMinute(date, time, minutes) {
  const [y,m,d] = date.split('-').map(Number);
  const [hh,mm] = time.split(':').map(Number);
  const value = new Date(Date.UTC(y,m-1,d,hh,mm+minutes));
  return [value.toISOString().slice(0,10),value.toISOString().slice(11,16)];
}
function validEnd(date, begin, end) {
  if (!TIME.test(end || '')) return null;
  // Bei Veranstaltungen, die nach Mitternacht enden, auf den Folgetag wechseln.
  return end > begin ? [date,end] : addMinute(date,end,24*60);
}
const VTIMEZONE = [
  'BEGIN:VTIMEZONE',
  'TZID:Europe/Berlin',
  'X-LIC-LOCATION:Europe/Berlin',
  'BEGIN:DAYLIGHT',
  'TZOFFSETFROM:+0100', 'TZOFFSETTO:+0200', 'TZNAME:CEST',
  'DTSTART:19700329T020000', 'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU',
  'END:DAYLIGHT',
  'BEGIN:STANDARD',
  'TZOFFSETFROM:+0200', 'TZOFFSETTO:+0100', 'TZNAME:CET',
  'DTSTART:19701025T030000', 'RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU',
  'END:STANDARD',
  'END:VTIMEZONE',
];

/** entries: [{ key: originaler JSON-Dateipfad, termin: JSON }], formats: Array<Veranstaltungsformat> */
export function kalenderErzeugen(entries, formats, stand = new Date()) {
  const byId = new Map(formats.map(format => [format.id,format]));
  const timestamp = stand.toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');
  const lines = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Spielonauten Neuss//Veranstaltungskalender//DE',
    'CALSCALE:GREGORIAN', 'METHOD:PUBLISH',
    'X-WR-CALNAME:Spielonauten Neuss - Veranstaltungen',
    'X-WR-CALDESC:Aktuelle Brettspieltermine der Spielonauten Neuss',
    `X-WR-TIMEZONE:${ZONE}`,
    'REFRESH-INTERVAL;VALUE=DURATION:PT12H',
    ...VTIMEZONE,
  ];
  let zaehler=0;
  const warnungen=[];
  for (const {key,termin} of [...entries].sort((a,b)=>a.termin.datum.localeCompare(b.termin.datum))) {
    const format=byId.get(termin.format);
    if (!format || !DATE.test(termin.datum||'') || !TIME.test(termin.beginn||'')) {
      warnungen.push(`Ungültiger oder unbekannter Termin: ${key}`);
      continue;
    }
    const abgesagt=termin.status==='abgesagt';
    const verschoben=termin.status==='verschoben';
    const prefix=abgesagt?'ABGESAGT ':verschoben?'VERSCHOBEN ':'';
    const summary=prefix+format.titel;
    const offen=!termin.ende;
    const end=validEnd(termin.datum,termin.beginn,termin.ende||termin.kalenderEnde||'');
    // Ohne Endzeit: Zeitpunkt-Eintrag nach RFC 5545, keine erfundene Endzeit.
    // Im CMS dann 'Endzeit nur für den Kalender' ausfüllen.
    if (!end) warnungen.push(`Kalender-Endzeit fehlt (wird als Zeitpunkt angezeigt): ${key}`);
    const details=[format.untertitel,format.beschreibung,
      offen?'Ende: Open End. Kalender-Endzeit ist nur eine technische Orientierung.':'',
      termin.hinweis||'', 'Aktuelle Informationen: https://spielonauten-neuss.de/veranstaltungen/'].filter(Boolean).join('\n\n');
    // UID bleibt stabil, wenn Datum/Status in derselben CMS-JSON-Datei geändert werden.
    const name=key.split('/').pop().replace(/\.json$/i,'').replace(/[^a-zA-Z0-9_-]/g,'-');
    lines.push('BEGIN:VEVENT');
    lines.push(`UID:${name}@spielonauten-neuss.de`);
    lines.push(`DTSTAMP:${timestamp}`);
    lines.push(`LAST-MODIFIED:${timestamp}`);
    lines.push(`DTSTART;TZID=${ZONE}:${stampLocal(termin.datum,termin.beginn)}`);
    if(end) lines.push(`DTEND;TZID=${ZONE}:${stampLocal(...end)}`);
    lines.push(`STATUS:${abgesagt||verschoben?'CANCELLED':'CONFIRMED'}`);
    lines.push(`SUMMARY:${escapeText(summary)}`);
    lines.push(`DESCRIPTION:${escapeText(details)}`);
    lines.push(`LOCATION:${escapeText(format.ort||'Neuss')}`);
    lines.push('URL:https://spielonauten-neuss.de/veranstaltungen/');
    lines.push('END:VEVENT');
    zaehler++;
  }
  lines.push('END:VCALENDAR');
  return { body: lines.map(fold).join('\r\n')+'\r\n', zaehler, warnungen };
}
