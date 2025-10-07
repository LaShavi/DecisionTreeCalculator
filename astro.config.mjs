// @ts-check

import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://LaShavi.github.io',
  base: '/DecisionTreeCalculator',
  output: 'static'
});