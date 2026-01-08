import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TEDxCCET',
    short_name: 'TEDxCCET',
    description: 'TEDxCCET: Ideas Worth Spreading at Carmel College of Engineering & Technology',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#ff0000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
