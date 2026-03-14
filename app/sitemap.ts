import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/product/', '/solutions/', '/news/', '/company/', '/contact/', '/privacy/', '/terms/'];
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${site.domain}${route}`,
    lastModified,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
