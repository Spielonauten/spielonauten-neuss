import { kalenderErzeugen } from '../lib/kalender.js';
import { veranstaltungen } from '../data/veranstaltungen.js';

// Alle JSON-Dateien werden auch bei später über Pages CMS angelegten Terminen einbezogen.
const termine = import.meta.glob('../content/termine/*.json', { eager: true, import: 'default' });

export const GET = () => {
  const eintraege = Object.entries(termine).map(([key, termin]) => ({ key, termin }));
  const { body, zaehler, warnungen } = kalenderErzeugen(eintraege, veranstaltungen);
  for (const warnung of warnungen) console.warn(`[Kalender] ${warnung}`);
  console.log(`[Kalender] ${zaehler} Einträge in kalender.ics erzeugt.`);
  return new Response(body, {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': 'inline; filename="spielonauten-kalender.ics"',
    },
  });
};
