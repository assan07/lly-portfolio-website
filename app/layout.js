import './globals.css'
import { Poppins, Playfair_Display } from 'next/font/google'
import { Providers } from './providers.jsx'
import { Navbar } from '@/components/site/Navbar'
import { Footer } from '@/components/site/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || 'https://lolly.dev'
  ),

  title: {
    default: 'Lolly Genda Aprilia | Graphic Designer & Data Administration',
    template: '%s | Lolly Genda Aprilia',
  },

  description:
    'Official portfolio website of Lolly Genda Aprilia, showcasing graphic design projects, creative works, data administration experience, certifications, and professional achievements.',

  applicationName: 'Lolly Portfolio',

  authors: [
    {
      name: 'Lolly Genda Aprilia',
    },
  ],

  creator: 'Lolly Genda Aprilia',

  publisher: 'Lolly Genda Aprilia',

  keywords: [
    'Lolly Genda Aprilia',
    'Graphic Designer',
    'Graphic Design Portfolio',
    'Creative Designer',
    'Data Administration',
    'Administrative Staff',
    'Portfolio Website',
    'Brand Identity',
    'Social Media Design',
    'Canva Designer',
    'Adobe Photoshop',
    'Indonesia',
  ],

  category: 'portfolio',

  classification: 'Personal Portfolio',

  alternates: {
    canonical: '/',
  },

  referrer: 'origin-when-cross-origin',

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },

  icons: {
    icon: 'icons/icon.png',
    shortcut: 'icons/favicon.ico',
    apple: 'icons/apple-icon.png',
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Lolly Portfolio',
    title: 'Lolly Genda Aprilia | Graphic Designer & Data Administration',
    description:
      'Explore the portfolio of Lolly Genda Aprilia featuring graphic design projects, creative works, certifications, and professional experience in data administration.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lolly Genda Aprilia Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Lolly Genda Aprilia | Graphic Designer & Data Administration',
    description:
      'Official portfolio of Lolly Genda Aprilia featuring graphic design projects, creative works, and data administration experience.',
    images: ['/og-image.png'],
  },
}

function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${playfair.variable}`}
    >
      <body>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
