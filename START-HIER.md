# Schritt für Schritt: Erste Veröffentlichung

## Was du vor dir hast

Eine funktionale Astro-Projektstruktur. Die Website ist **noch nicht vollständig**: Fotos und Logo sind bewusst durch Text-Platzhalter ersetzt. Die sechs Inhaltsseiten (vier Hauptseiten plus Impressum und Datenschutz) sind als Entwurf angelegt. Sie bleiben für Suchmaschinen auf `noindex`.

## 1. GitHub-Repository erstellen

1. Öffne https://github.com/new und melde dich an.
2. **Repository name**: exakt `spielonauten-neuss`.
3. **Description** (optional): `Neue Website der Spielonauten Neuss`.
4. **Public** wählen (GitHub Free/Pages).
5. Keine Vorlage, kein README, keine `.gitignore`, keine Lizenz anlegen.
6. **Create repository**.

## 2. Dateiablage hochladen

1. ZIP auf deinem Rechner entpacken.
2. Im entpackten Verzeichnis `spielonauten-neuss` sollten `package.json`, `astro.config.mjs`, `README.md`, `src` und `.github` unmittelbar nebeneinander liegen.
3. Im GitHub-Repository auf **uploading an existing file** klicken (bei leerem Repository) oder später **Add file → Upload files**.
4. Den **Inhalt** des entpackten Verzeichnisses in den Uploadbereich ziehen. Achte unbedingt darauf, dass `.github/workflows/deploy.yml` mit hochgeladen wird. Unter Windows können Dateien mit vorangestelltem Punkt teilweise ausgeblendet sein; ggf. im Explorer unter *Ansicht → Einblenden → Ausgeblendete Elemente* aktivieren. Drag & Drop des gesamten Inhalts (oder des entpackten Ordners, falls die UI den Ordnerinhalt erkennt) ist am einfachsten.
5. In der Vorschau prüfen, ob die Dateien an der Wurzel liegen: `package.json`, `astro.config.mjs`, `src/...`, `.github/workflows/deploy.yml`.
6. **Commit changes** bestätigen (direkt nach `main`).

**Wichtig:** Nicht nur die ZIP-Datei hochladen. Kein zweites Verzeichnis `spielonauten-neuss/` im Repository erzeugen.

## 3. GitHub Pages einschalten

1. Repository → **Settings**.
2. Linke Leiste → **Pages**.
3. **Build and deployment → Source → GitHub Actions**.
4. Repository → **Actions**. Der Workflow heißt **Spielonauten-Website veröffentlichen**.
5. Falls der Upload-Commit schon vor dem Umschalten erfolgte: In **Actions** den Workflow auswählen → **Run workflow** → `main` → **Run workflow**.

## 4. Website prüfen

Nach einem erfolgreich abgeschlossenen Workflow (grüner Haken) die Adresse aufrufen:

`https://DEIN-NUTZERNAME.github.io/spielonauten-neuss/`

Die Startseite sollte im bekannten Blau-Weiß-Stil erscheinen. Navigation, Seitenlinks und mobile Menüführung sind bereits vorhanden. Die Originalbilder werden im nächsten Schritt eingebaut.

## Fehler vermeiden

- **404 nach dem Aufruf:** Prüfe den Repository-Namen `spielonauten-neuss` und `Settings → Pages → Source: GitHub Actions`. Prüfe, ob der Workflow erfolgreich war.
- **Website ungestaltet / Links 404:** In `astro.config.mjs` muss `base: '/spielonauten-neuss'` stehen; nur bei einem anders benannten Repository ändern.
- **Kein Workflow sichtbar:** `.github/workflows/deploy.yml` fehlt oder wurde in einen zusätzlichen Ordner hochgeladen.
- **Build fehlgeschlagen:** Screenshot der Fehlermeldung aus **Actions** bereitstellen. Keine zufälligen Veränderungen am Code vornehmen.

**Stand:** Die bisherigen Jimdo-Inhalte und rechtlichen Angaben sind noch nicht vollständig übertragen. Die alte Website bleibt daher der offizielle Auftritt.
