import { Analytics } from '@vercel/analytics/react'
import { type Metadata } from 'next'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://glowapelnakodu.pl'),
  title: {
    template: 'Głowa pełna kodu',
    default: `Głowa pełna kodu - Podcast o nauce programowania dla początkujących i zmianie branży na IT.`,
  },
  description: `
  Podcast o nauce programowania dla początkujących, zmianie branży na IT, przekwalifikowaniu się na programistę, zdobywaniu pierwszej pracy w IT, budowaniu swojego brandu w IT, zdobywaniu i rozwijaniu umiejętności miękkich w IT, oraz o równowadze między życiem zawodowym a prywatnym dla programistów.
  `,
  openGraph: {
    images: {
      url:'/OG_GPK_1200_630.webp',
      width: 1200,
      height: 1630,
      alt: "Głowa pełna kodu - Podcast",
    }
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-white antialiased">
      <head>
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </head>
      <body className="flex min-h-full">
        <div className="w-full">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  )
}
