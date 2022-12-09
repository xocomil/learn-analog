/// <reference types="vitest" />

import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  publicDir: 'assets',
  build: {
    outDir: `../dist/my-app/client`,
    emptyOutDir: true,
    target: 'es2022',
  },
  resolve: {
    mainFields: ['module'],
  },
  // plugins: [analog()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['test-setup.ts'],
    include: ['**/*.spec.ts'],
    cache: {
      dir: `../node_modules/.vitest`,
    },
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
