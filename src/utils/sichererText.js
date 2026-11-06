// Einfache Textformatierung für redaktionelle CMS-Texte.
// HTML- und Script-Code wird zunächst vollständig maskiert. Unterstützt
// werden nur **fett** und *kursiv*. Keine unkontrollierten HTML-Elemente.
export function formatierterText(wert) {
  if (typeof wert !== 'string') return '';
  return wert
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>');
}
