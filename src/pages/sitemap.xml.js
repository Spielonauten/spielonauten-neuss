// Astro erstellt daraus beim Build /spielonauten-neuss/sitemap.xml.
// Keine zusätzlichen npm-Abhängigkeiten erforderlich.
const urls = [
  '',
  'veranstaltungen/',
  'wo-wird-gespielt/',
  'ueber-uns/',
  'impressum/',
  'datenschutz/',
];

export function GET({ site }) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  // "site" enthält die GitHub-Pages-Domain aus astro.config.mjs.
  const origin = site?.origin ?? 'https://spielonauten.github.io';
  const list = urls.map((path) => {
    const absolute = new URL(`${base}/${path}`, origin).href;
    return `  <url><loc>${absolute}</loc></url>`;
  }).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `${list}\n</urlset>\n`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
