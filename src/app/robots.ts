import { MetadataRoute } from 'next';

//TODO Adaptar segun la empresa
//Es un archivo que le indica a los bots (Google, Bing, etc.) qué partes de tu sitio pueden o no pueden indexar.
// Sirve para:
// -Permitir o bloquear rutas (por ejemplo: /admin, /api, /dashboard).
// -Evitar que Google rastree recursos innecesarios que consumen crawl budget.
// -Declarar dónde está tu sitemap.xml.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/dashboard', '/api'],
      },
    ],
    sitemap: 'https://TU_DOMINIO.com/sitemap.xml',
    host: 'https://TU_DOMINIO.com',
  };
}
