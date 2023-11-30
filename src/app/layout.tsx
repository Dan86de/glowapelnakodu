import { type Metadata } from 'next'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://glowapelnakodu.pl'),
  title: {
    template: 'Głowa pełna kodu',
    default: `Głowa pełna kodu - Podcast dla programistów, którzy marzą o stworzeniu własnego biznesu,
    tworzony przez programistę.`,
  },
  description: `Podcast dla programistów, którzy marzą o stworzeniu własnego biznesu, tworzony przez programistę. Jako samouk, który przeszedł drogę od branży samochodowej do świata technologii, dzielę się unikalną perspektywą na zmianę branży, naukę programowania i tworzenie własnych produktów.`,
  openGraph: {
    images: '/opengraph-image.png',
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
        <div className="w-full">{children}</div>
      </body>
    </html>
  )
}
