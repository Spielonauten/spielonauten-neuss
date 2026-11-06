/**
 * Zentrale Veranstaltungsdaten: Jede Veranstaltung wird in Pages CMS
 * als eigene JSON-Datei unter src/content/veranstaltungen bearbeitet.
 *
 * Die Reihenfolge für den Startseiten-Slider bleibt hier bewusst stabil.
 * Die Veranstaltungs-Unterseite besitzt ihre eigene Reihenfolge.
 *
 * Änderungen in Pages CMS werden in GitHub gespeichert und beim
 * nächsten GitHub-Pages-Build automatisch übernommen.
 */
import rheingespielt from '../content/veranstaltungen/rheingespielt.json';
import offenerBrettspieleabend from '../content/veranstaltungen/offener-brettspieleabend.json';
import ikea from '../content/veranstaltungen/ikea.json';
import vorhangAuf from '../content/veranstaltungen/vorhang-auf.json';
import xxlSpieletag from '../content/veranstaltungen/xxl-spieletag.json';
import thalia from '../content/veranstaltungen/thalia.json';

export const veranstaltungen = [
  rheingespielt,
  offenerBrettspieleabend,
  ikea,
  vorhangAuf,
  xxlSpieletag,
  thalia,
];
