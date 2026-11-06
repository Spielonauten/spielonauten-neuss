/** Veranstaltungen (dauerhafte Angaben) und Einzeltermine (einmalig bestätigte Daten).
 * Die Dateien werden getrennt über Pages CMS bearbeitet.
 */
import rheingespielt from '../content/veranstaltungen/rheingespielt.json';
import offenerBrettspieleabend from '../content/veranstaltungen/offener-brettspieleabend.json';
import ikea from '../content/veranstaltungen/ikea.json';
import vorhangAuf from '../content/veranstaltungen/vorhang-auf.json';
import xxlSpieletag from '../content/veranstaltungen/xxl-spieletag.json';
import thalia from '../content/veranstaltungen/thalia.json';
import { naechsterTerminText, zukunftstermine, dringenderTerminHinweis } from './terminanzeige.js';

// Vite übernimmt alle von Pages CMS angelegten JSON-Dateien, ohne
// dass wir für neue Einzeltermine jemals den JavaScript-Code ändern müssen.
const dateien = import.meta.glob('../content/termine/*.json', { eager: true, import: 'default' });
const einzeltermine = Object.values(dateien);
const formate = [rheingespielt, offenerBrettspieleabend, ikea, vorhangAuf, xxlSpieletag, thalia];

export const veranstaltungen = formate.map((format) => {
  const termine = einzeltermine.filter((termin) => termin.format === format.id);
  return {
    ...format,
    termine,
    art: format.typ === 'regelmaessig' ? 'regelmaessig' : 'planung',
    datum: '',
    termin: naechsterTerminText(termine),
    terminHinweis: dringenderTerminHinweis(termine),
    kommendeTermine: zukunftstermine(termine),
  };
});
