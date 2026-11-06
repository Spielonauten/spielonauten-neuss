/**
 * Kooperationspartner aus einer Pages-CMS-editierbaren JSON-Liste.
 * Die Reihenfolge entspricht exakt der Reihenfolge in Pages CMS.
 */
import eintraege from '../content/partner.json';

const repoPrefix = '/spielonauten-neuss/';

function normalisiereBildpfad(pfad) {
  if (typeof pfad !== 'string') return '';
  const wert = pfad.trim();
  // Pages CMS speichert den öffentlichen Pfad mit Repository-Präfix.
  // index.astro setzt den GitHub-Pages-Basispfad selbst davor.
  if (wert.startsWith(repoPrefix)) return wert.slice(repoPrefix.length);
  return wert.replace(/^\/+/, '');
}

export const partner = eintraege
  .filter((eintrag) => eintrag && typeof eintrag === 'object')
  .map((eintrag) => ({
    id: typeof eintrag.id === 'string' ? eintrag.id : '',
    name: typeof eintrag.name === 'string' ? eintrag.name.trim() : '',
    beschreibung: typeof eintrag.beschreibung === 'string' ? eintrag.beschreibung : '',
    logo: normalisiereBildpfad(eintrag.logo),
    website: typeof eintrag.website === 'string' ? eintrag.website.trim() : '',
  }))
  .filter((eintrag) => eintrag.name && eintrag.logo && /^https:\/\//i.test(eintrag.website));
