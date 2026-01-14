import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  adapter: vercel(),
  site: 'https://colrey.edu.co',
  server: {
    port: 4322,
    host: true,
  },
});
