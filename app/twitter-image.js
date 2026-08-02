import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Lolly Genda Aprilia Portfolio'

export const size = {
  width: 1200,
  height: 630,
}
const website =
  process.env.NEXT_PUBLIC_BASE_URL
    ?.replace(/^https?:\/\//, '')
  ?? 'lollygendaaprilia.com'


export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, #18181B 0%, #232328 45%, #2F2A2D 100%)',
          color: '#ffffff',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: '#8DB49B',
            marginBottom: 20,
            letterSpacing: 2,
          }}
        >
          PORTFOLIO
        </div>

        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 18,
          }}
        >
          Lolly Genda Aprilia
        </div>

        <div
          style={{
            fontSize: 34,
            color: '#F4EEF0',
            marginBottom: 40,
          }}
        >
          Graphic Designer &
          Data Administration
        </div>

        <div
          style={{
            fontSize: 24,
            color: '##C8C1C4',
            maxWidth: 850,
            lineHeight: 1.5,
          }}
        >
          Creating impactful visual designs and delivering organized administrative solutions with creativity and professionalism.
        </div>

        <div
          style={{
            position: 'absolute',
            right: 80,
            bottom: 60,
            fontSize: 24,
            color: '#D89AA5',
          }}
        >
          {website}
        </div>
      </div>
    ),
    size
  )
}


