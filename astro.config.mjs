import { defineConfig } from 'astro/config';

// El dominio personalizado tiene prioridad sobre la dirección de producción de Vercel.
const site = process.env.PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined);

export default defineConfig({
  site,
  compressHTML: true,
  // La solicitud ahora es el asistente «Hablemos de su plan» dentro de la página de inicio.
  redirects: { '/solicitar': '/' },
});
