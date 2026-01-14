import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  build: {
    format: 'directory',
  },
  site: 'https://colrey.edu.co',
  server: {
    port: 4322,
    host: true,
  },
});
