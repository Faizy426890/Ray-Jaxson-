import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://shatterlyfe.com'
const DESCRIPTION =
  '$hatterLyfé — Melodic Rap artist from Portland, Oregon. Real stories of survival, loss, love, and finding music when drugs almost won. Stream on Spotify.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: '$hatterLyfé — Melodic Rap Artist',
  description: DESCRIPTION,
  keywords: [
    '$hatterLyfé',
    'ShatterLyfe',
    'Jaxson',
    'Melodic Rap',
    'Portland Oregon rapper',
    'underground rap',
    'emotional rap',
    'storytelling rap',
  ],
  authors: [{ name: '$hatterLyfé' }],
  creator: '$hatterLyfé',
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: '$hatterLyfé — Melodic Rap Artist',
    description: DESCRIPTION,
    siteName: '$hatterLyfé',
  },
  twitter: {
    card: 'summary_large_image',
    title: '$hatterLyfé — Melodic Rap Artist',
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
}

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: '$hatterLyfé',
  alternateName: 'Jaxson',
  genre: ['Melodic Rap'],
  foundingLocation: { '@type': 'Place', name: 'Portland, Oregon, USA' },
  url: SITE_URL,
  email: 'shatterlyfemusic@gmail.com',
  sameAs: [
    'https://open.spotify.com/artist/1Ixmx7vcuZ8hGyrRUslzhx',
    'https://instagram.com/official.shatterlyfe',
    'https://tiktok.com/@shatter_lyfe',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
