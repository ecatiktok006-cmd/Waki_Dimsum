import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';

// A simple Vite plugin to serve the Vercel API endpoint in development
const vercelApiPlugin = (): Plugin => ({
  name: 'vercel-api',
  configureServer(server) {
    server.middlewares.use(async (req: any, res: any, next) => {
      if (req.url?.startsWith('/api/reviews')) {
        try {
          // Parse query parameters
          const urlObj = new URL(req.url, `http://${req.headers.host}`);
          req.query = Object.fromEntries(urlObj.searchParams.entries());

          const handlerModule = await server.ssrLoadModule('./api/reviews.ts');
          const handler = handlerModule.default;
          
          res.status = (code: number) => { res.statusCode = code; return res; };
          res.json = (data: any) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
          };
          
          await handler(req, res);
        } catch (err) {
          console.error(err);
          res.statusCode = 500;
          res.end('Internal Server Error');
        }
      } else {
        next();
      }
    });
  }
});

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), vercelApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    define: {
      'process.env.GOOGLE_MAPS_PLATFORM_KEY': JSON.stringify(process.env.GOOGLE_MAPS_PLATFORM_KEY || '')
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
