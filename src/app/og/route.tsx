import { ImageResponse } from 'next/og'
import posterImage from '@/images/poster.png'
import Image from 'next/image'
// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          width="256"
          height="256"
          src={posterImage}
          alt={'Podcast cover'}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
