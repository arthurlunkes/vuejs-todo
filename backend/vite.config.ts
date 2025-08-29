import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  server: {
    port: 3000,
    host: 'locahost',
    open: true,
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'nest', // usa NestJS
      appPath: 'src/main.ts',
      exportName: 'viteNodeApp',
    }),
  ],
});
