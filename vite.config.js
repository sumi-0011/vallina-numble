import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@components', replacement: '/src/components' },
      { find: '@api', replacement: '/src/api' },
      { find: '@css', replacement: '/src/css' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@core', replacement: '/src/components/core' },
    ],
  },
});
