import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';  
import { fileURLToPath } from 'url';

// Define __dirname using import.meta.url
const __dirname = fileURLToPath(new URL('.', import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // library entry and output settings
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'), // Change this to 'src/main.tsx'
      name: 'ui-design-system',
      fileName: (format) => `ui-design-system.${format}.js` // Include format for better output management
    },
    // bundler options
    // externalize react-related imports
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'ReactDom',
          'react/jsx-runtime': 'jsx' // Update this to a more standard name
        }
      }
    } 
  }
});
