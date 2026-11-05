/**
 * Spielorte der Spielonauten Neuss.
 * Stand: November 2026. Anfahrtsdetails vor der endgültigen Veröffentlichung prüfen.
 * Die Hausnummer 25 ist der Zugang für unsere Gäste; das Gebäude wird unter 29 geführt.
 */
export const spielorte = {
  kardinal: {
    name: 'Kardinal-Bea-Haus',
    eingang: 'Furtherhofstraße 25',
    gebaeudeadresse: 'Furtherhofstraße 29',
    plzOrt: '41462 Neuss',
    route: 'https://www.google.com/maps/dir/?api=1&destination=Furtherhofstra%C3%9Fe%2025%2C%2041462%20Neuss',
    karte: 'https://www.openstreetmap.org/search?query=Furtherhofstra%C3%9Fe%2025%2C%2041462%20Neuss',
    website: 'https://fkbh.de/',
  },
  theater: {
    name: 'Rheinisches Landestheater Neuss',
    eingang: 'Oberstraße 95',
    plzOrt: '41460 Neuss',
    route: 'https://www.google.com/maps/dir/?api=1&destination=Oberstra%C3%9Fe%2095%2C%2041460%20Neuss',
    website: 'https://www.rheinisches-landestheater.de/seiten/ihr-besuch.html',
  },
};

export const wegschritte = [
  {
    bild: 'weg-01-vorplatz.webp',
    breite: 1500,
    hoehe: 844,
    alt: 'Blick über den Vorplatz mit blauem Wegpfeil zur Überdachung',
    text: 'Über den Vorplatz zur Überdachung gehen und dort links halten.',
  },
  {
    bild: 'weg-02-ueberdachung.webp',
    breite: 1500,
    hoehe: 844,
    alt: 'Überdachter Zugang zum Gebäude mit blauem Pfeil in Richtung Tür',
    text: 'Unter der Überdachung geradeaus zur Eingangstür gehen.',
  },
  {
    bild: 'weg-03-eingang.webp',
    breite: 1100,
    hoehe: 816,
    alt: 'Geöffnete hölzerne Eingangstür mit blauem Pfeil nach links',
    text: 'Durch die Tür und direkt wieder nach links abbiegen.',
  },
  {
    bild: 'spielsaal.webp',
    breite: 1089,
    hoehe: 816,
    alt: 'Großer Spielsaal mit vielen Tischen und Stühlen',
    text: 'Geschafft! Du bist im großen Saal und kannst direkt mitspielen.',
  },
];
