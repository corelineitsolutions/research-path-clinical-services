import { MetadataRoute } from 'next';
import { servicesData } from '@/lib/servicesData';
import { insightsData } from '@/lib/insightsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://researchpath.in';

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/quality-compliance',
    '/insights',
    '/contact',
    '/privacy-policy',
    '/terms-of-use',
    '/cookie-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/services') ? 0.9 : 0.8,
  }));

  // Dynamic service detail routes
  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // Dynamic insight article routes
  const insightRoutes = insightsData.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes, ...insightRoutes];
}
