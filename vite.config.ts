import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ exclude: ['src/stories/**'] })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.tsx'),
      fileName: format => `index.${format}.js`,
      name: 'good-design-system',
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
    sourcemap: true,
    emptyOutDir: true,
  },
});
