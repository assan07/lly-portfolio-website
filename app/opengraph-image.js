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
            'linear-gradient(135deg, #020617 0%, #0f172a 45%, #1e293b 100%)',
          color: '#38bdf8',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: '#38bdf8',
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
            color: '#cbd5e1',
            marginBottom: 40,
          }}
        >
          Graphic Designer &
          Data Administration
        </div>

        <div
          style={{
            fontSize: 24,
            color: '#94a3b8',
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
            color: '#38bdf8',
          }}
        >
          {website}
        </div>
      </div>
    ),
    size
  )
}


