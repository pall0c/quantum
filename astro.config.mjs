// @ts-check
import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://pall0c.github.io',
  base: '/quantum/',
  integrations: [markdoc()],
  vite: {
    plugins: [tailwindcss()]
  }
});
