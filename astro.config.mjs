// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkTableOfContents from './scripts/toc-plugin';

// https://astro.build/config
export default defineConfig({
   markdown: {
    remarkPlugins: [remarkTableOfContents],
  },
  integrations: [mdx()],
  site: 'https://tanmayband.github.io',
  base: '/personal-portfolio'
});