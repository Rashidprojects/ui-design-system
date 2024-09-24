import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Use path-browserify
import path from 'path-browserify';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve('src/index.ts'), // Adjusted for path-browserify
      name: 'ReactUILibrary',
      formats: ['es', 'cjs'],
      fileName: (format) => `react-ui-library.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
