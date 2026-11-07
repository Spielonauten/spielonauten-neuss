import { defineConfig } from 'astro/config';

// Offizielle Website auf eigener Domain: kein Repository-Unterpfad mehr.
// Alle internen Links nutzen dadurch / statt /spielonauten-neuss/.
export default defineConfig({
  site: 'https://spielonauten-neuss.de',
  output: 'static',
});
