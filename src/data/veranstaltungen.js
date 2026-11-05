/**
 * Vorläufige zentrale Veranstaltungsliste für die Startseite.
 * Später werden diese Felder über den Inhaltseditor gepflegt.
 *
 * Feste Termine werden nach Ablauf im Slider automatisch ausgeblendet.
 * Wiederkehrende Veranstaltungen ohne bestätigten Einzeltermin bleiben sichtbar.
 */
export const veranstaltungen = [
  {
    id: 'rheingespielt',
    titel: 'Rheingespielt',
    untertitel: 'Der Spieleabend im Rheinischen Landestheater Neuss',
    beschreibung: 'Wir treffen uns zu einem gemeinsamen Spieleabend im offenen Foyer. Brettspiele und Erklärungen bringen wir mit – du kannst einfach vorbeikommen.',
    termin: 'Donnerstag, 19.11.2026 · 19:00 Uhr',
    datum: '2026-11-19',
    art: 'fest',
    ort: 'Rheinisches Landestheater Neuss, Oberstraße 95',
  },
  {
    id: 'offener-brettspieleabend',
    titel: 'Offener Brettspieleabend',
    untertitel: 'Gemeinsam spielen im Kardinal-Bea-Haus',
    beschreibung: 'Ob Spieleklassiker oder Neuheit: Bring dein Lieblingsspiel mit oder entdecke Spiele aus unserer Sammlung. Kostenlos und ohne Anmeldung.',
    termin: 'Jeden zweiten Montag im Monat · ab 18:30 Uhr',
    datum: '',
    art: 'regelmaessig',
    ort: 'Kardinal-Bea-Haus, Furthhofstraße 25',
  },
  {
    id: 'ikea',
    titel: 'After-Work bei IKEA',
    untertitel: 'Brettspiele im Schwedensrestaurant',
    beschreibung: 'Gemeinsam neue und bekannte Brettspiele ausprobieren. Für diesen Abend ist eine Anmeldung über IKEA vorgesehen.',
    termin: 'Donnerstag, 26.11.2026 · 18:00–20:30 Uhr',
    datum: '2026-11-26',
    art: 'fest',
    ort: 'IKEA Düsseldorf, Oerschbachstraße 75',
  },
  {
    id: 'vorhang-auf',
    titel: 'Vorhang auf für Brettspiele',
    untertitel: 'Der große Brettspieltag im Theater',
    beschreibung: 'Ein ganzer Tag für neue Spiele, Klassiker und gemeinsame Partien. Kommt vorbei, spielt mit und lasst euch die Regeln erklären.',
    termin: 'Samstag, 12.12.2026 · 12:00–21:00 Uhr',
    datum: '2026-12-12',
    art: 'fest',
    ort: 'Rheinisches Landestheater Neuss, Oberstraße 95',
  },
  {
    id: 'xxl-spieletag',
    titel: 'XXL-Spieletag',
    untertitel: 'Ein ganzer Tag voller Brettspiele',
    beschreibung: 'Beim XXL-Spieletag könnt ihr gemeinsam spielen, neue Titel entdecken und eure Lieblingsspiele mitbringen.',
    termin: 'Samstag, 06.03.2027 · ab 11:00 Uhr',
    datum: '2027-03-06',
    art: 'fest',
    ort: 'Kardinal-Bea-Haus, Furthhofstraße 25',
  },
  {
    id: 'thalia',
    titel: 'Brettspielaktion bei Thalia',
    untertitel: 'Vor dem Kauf im Geschäft ausprobieren',
    beschreibung: 'Wir erklären Brettspiele direkt im Rheinpark-Center Neuss. Der nächste Termin wird noch geplant.',
    termin: 'Nächster Termin in Planung',
    datum: '',
    art: 'planung',
    ort: 'Thalia im Rheinpark-Center Neuss',
  },
];
