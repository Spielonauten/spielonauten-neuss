/** Einheitliche Terminlogik für Website und Browser; Zeitzone Europe/Berlin. */
export const KEIN_TERMIN = 'Nächster Termin wird noch bekannt gegeben.';

export function datumHeuteBerlin(zeit = new Date()) {
  const teile = new Intl.DateTimeFormat('de-DE', {
    timeZone: 'Europe/Berlin', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(zeit);
  const wert = (typ) => teile.find((p) => p.type === typ)?.value || '';
  return `${wert('year')}-${wert('month')}-${wert('day')}`;
}
export function sortierteTermine(termine = []) {
  return [...termine].filter((t) => /^\d{4}-\d{2}-\d{2}$/.test(t.datum || ''))
    .sort((a, b) => a.datum.localeCompare(b.datum) || (a.beginn || '').localeCompare(b.beginn || ''));
}
export function zukunftstermine(termine = [], heute = datumHeuteBerlin()) {
  return sortierteTermine(termine).filter((t) => t.datum >= heute);
}
export function naechsterBestaetigterTermin(termine = [], heute = datumHeuteBerlin()) {
  return zukunftstermine(termine, heute).find((t) => t.status === 'bestaetigt') || null;
}
export function termText(termin) {
  if (!termin) return KEIN_TERMIN;
  const [jahr, monat, tag] = termin.datum.split('-').map(Number);
  const date = new Date(Date.UTC(jahr, monat - 1, tag, 12));
  const datumsText = new Intl.DateTimeFormat('de-DE', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  }).format(date);
  const zeit = termin.beginn
    ? termin.ende
      ? `, ${termin.beginn}–${termin.ende} Uhr`
      : `, ab ${termin.beginn} Uhr`
    : '';
  return datumsText + zeit;
}
export function naechsterTerminText(termine = [], heute = datumHeuteBerlin()) {
  return termText(naechsterBestaetigterTermin(termine, heute));
}
export function statusText(termin) {
  const prefix = termin.status === 'abgesagt' ? 'Abgesagt: '
    : termin.status === 'verschoben' ? 'Verschoben: ' : '';
  return `${prefix}${termText(termin)}${termin.hinweis ? ` – ${termin.hinweis}` : ''}`;
}

// Absagen und Verschiebungen vor dem nächsten bestätigten Termin hervorheben.
export function dringenderTerminHinweis(termine = [], heute = datumHeuteBerlin()) {
  const kommend = zukunftstermine(termine, heute);
  const bestaetigt = kommend.find((t) => t.status === 'bestaetigt');
  const problem = kommend.find((t) => t.status !== 'bestaetigt' && (!bestaetigt || t.datum <= bestaetigt.datum));
  return problem ? statusText(problem) : '';
}
