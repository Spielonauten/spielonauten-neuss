import { defineConfig } from 'astro/config';

// GitHub-Projektseite: https://BENUTZERNAME.github.io/spielonauten-neuss/
// Der Inhaber wird beim GitHub-Actions-Build automatisch erkannt.
// Bei einer spaeteren eigenen Domain werden site und base angepasst.
const owner = process.env.GITHUB_REPOSITORY_OWNER || 'example';

export default defineConfig({
  site: `https://${owner}.github.io`,
  base: '/spielonauten-neuss',
  output: 'static',
});
