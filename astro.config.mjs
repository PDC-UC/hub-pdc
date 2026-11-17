import { defineConfig } from 'astro/config';

// Cuando el dominio esté conectado en Vercel, cambia esta dirección por la real
// (por ejemplo https://tudominio.cl). Se usa para los enlaces al compartir por WhatsApp.
export default defineConfig({
  site: 'https://www.pastoralesdecarrera.cl',
  output: 'static',
  // Las direcciones antiguas siguen funcionando.
  redirects: {
    '/coordinadores': '/consejo',
    '/cargos': '/consejo',
    '/cargos/[slug]': '/consejo/[slug]',
  },
});
