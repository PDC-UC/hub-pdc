import { defineConfig } from 'astro/config';

// Cuando el dominio esté conectado en Vercel, cambia esta dirección por la real
// (por ejemplo https://tudominio.cl). Se usa para los enlaces al compartir por WhatsApp.
export default defineConfig({
  site: 'https://example.cl',
  output: 'static',
});
