import { defineConfig } from 'astro/config';

// El dominio definitivo aún no está confirmado (ver CONTENT_REVIEW.md).
// Defina PUBLIC_SITE_URL al publicar para generar URL canónica y Open Graph absolutos.
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || undefined,
  compressHTML: true,
  // La solicitud ahora es el asistente «Hablemos de su plan» dentro de la página de inicio.
  redirects: { '/solicitar': '/' },
});
