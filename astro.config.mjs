import { defineConfig } from 'astro/config';

// El dominio personalizado tiene prioridad sobre la dirección pública del proyecto.
const site = process.env.PUBLIC_SITE_URL || 'https://la-canada-reverdece.vercel.app';

export default defineConfig({
  site,
  compressHTML: true,
  // La solicitud ahora es el asistente «Hablemos de su plan» dentro de la página de inicio.
  redirects: { '/solicitar': '/' },
});
