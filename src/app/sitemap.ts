import { MetadataRoute } from 'next';
import { presentationsRegistry } from '@/data/presentation';

// You can fetch dynamic routes from your CMS or DB here
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://reactivando.io';

  const defaultLanguages = ['pt', 'en'];

  const staticRoutes = [
    '',
    '/programs',
    '/manifesto',
    '/about',
  ];

  // Map static routes
  const routes = defaultLanguages.flatMap((lang) =>
    staticRoutes.map((route) => ({
      url: `${baseUrl}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    }))
  );

  // Map dynamic presentations routes
  const presentationRoutes = defaultLanguages.flatMap((lang) =>
    Object.keys(presentationsRegistry).map((slug) => ({
      url: `${baseUrl}/${lang}/presentations/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  // Optional: Redirect root url to a specific default language
  const rootRoute = {
    url: `${baseUrl}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1,
  };

  return [rootRoute, ...routes, ...presentationRoutes];
}
