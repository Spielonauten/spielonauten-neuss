/**
 * Gemeinsame Datenquelle für die Bildergalerie „Über uns“.
 * Die Fotos, Alternativtexte und Bildunterschriften werden in Pages CMS
 * über src/content/ueber-uns-galerie.json bearbeitet.
 *
 * Pages CMS speichert Bildpfade mit dem GitHub-Pages-Basispfad.
 * Die Galerie-Komponente ergänzt den aktuellen Basispfad selbst. Daher
 * entfernen wir ihn hier, um doppelte URLs zu vermeiden.
 */
import eintraege from '../content/ueber-uns-galerie.json';

const basisVerzeichnis = '/spielonauten-neuss/';

export const ueberUnsGalerie = eintraege
  .filter((eintrag) => eintrag && typeof eintrag.bild === 'string' && eintrag.bild.trim())
  .map((eintrag) => {
    let bild = eintrag.bild.trim();
    if (bild.startsWith(basisVerzeichnis)) {
      bild = bild.slice(basisVerzeichnis.length);
    } else {
      bild = bild.replace(/^\/+/, '');
    }

    return {
      bild,
      titel: eintrag.titel || '',
      beschreibung: eintrag.beschreibung || '',
      alt: eintrag.alt || eintrag.titel || 'Einblick in die Spielonauten-Gemeinschaft',
    };
  });
