import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// Configuración para desarrollo local
export default defineConfig({
  integrations: [tailwind()],
  site: 'http://localhost:4321',
  output: 'static'
});