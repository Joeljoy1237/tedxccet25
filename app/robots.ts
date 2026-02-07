import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/login', '/landingpage'],
    },
    sitemap: 'https://tedxccet.com/sitemap.xml',
  }
}
