# Spielonauten Neuss – Neuaufbau der Website

Astro-Projekt für den schrittweisen Umzug von Jimdo auf GitHub Pages.

**Stand: Phase 2 – technisch nutzbarer Entwurf, noch keine fertige öffentliche Vereinswebsite.**

## Einrichtung im Browser

1. Auf https://github.com/new ein **öffentliches** Repository mit dem exakten Namen `spielonauten-neuss` erstellen.
2. **Add a README**, **.gitignore** und **License** beim Anlegen deaktiviert lassen.
3. Dieses ZIP auf dem Computer **entpacken**.
4. Im Repository `Add file` → `Upload files` wählen.
5. **Alle Dateien und Ordner aus dem entpackten Projektordner** per Drag & Drop in die Uploadfläche ziehen. Nicht das ZIP selbst hochladen und keine zusätzliche Ordnerebene `spielonauten-neuss/` in das Repository legen. Bei Schwierigkeiten mit versteckten Verzeichnissen siehe `START-HIER.md`.
6. Änderungen mit `Commit changes` direkt in `main` speichern.
7. Im Repository `Settings` → `Pages` → `Build and deployment` → `Source: GitHub Actions` auswählen.
8. Unter `Actions` den Workflow `Spielonauten-Website veröffentlichen` prüfen. Bei Bedarf `Run workflow` manuell starten.
9. Das Ergebnis erscheint unter `https://DEIN-NUTZERNAME.github.io/spielonauten-neuss/`.

## Verzeichnisstruktur

- `src/pages` – Inhalte/Dateien der einzelnen Seiten
- `src/components` – wiederverwendete Navigation, Footer, Platzhalter
- `src/layouts` – HTML-Grundgerüst
- `src/styles/global.css` – Farben und Layout
- `public/` – später eure Originalfotos und Logos
- `.github/workflows/deploy.yml` – automatische Veröffentlichung
- `astro.config.mjs` – GitHub-Pages-Unterverzeichnis `/spielonauten-neuss`

## Lokal entwickeln (optional)

Node.js 24 installieren und im Projektordner:

```bash
npm install
npm run dev
```

Die Release-Version kann mit `npm run build` geprüft werden.

## Wichtig: Entwurfsmodus

- Die Seiten werden absichtlich mit `<meta name="robots" content="noindex, nofollow">` ausgegeben. Den Eintrag erst zur endgültigen Ablösung der Jimdo-Website entfernen.
- Es fehlen noch Originalbilder, vollständige Veranstaltungstexte und Termine, ein funktionsfähiges Kontaktformular und die endgültigen Rechtstexte.
- Es ist noch **kein** CMS angeschlossen. Pages CMS folgt in Phase 5.
- Das Header-Signet `SN` ist lediglich ein vorläufiger Logo-Platzhalter.
- Jimdo bleibt unverändert online; keine Domain- oder DNS-Änderungen erforderlich.

## Eigene Domain (erst später)

Beim Wechsel auf eine eigene Domain `site` auf die Domain setzen, `base` entfernen, GitHub-Pages-Custom-Domain konfigurieren und die Pfade erneut testen. Nicht jetzt vornehmen.
