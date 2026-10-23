import type { Metadata, Viewport } from 'next'
import { Instrument_Sans, Syne } from 'next/font/google'
import Shell from '@/components/Shell'
import FloatingQuote from '@/components/FloatingQuote'
import jsonLd from '@/lib/jsonld.json'
import { DESCRIPTIONS, SITE_URL, TITLES } from '@/lib/data'
import './globals.css'

const syne = Syne({ subsets: ['latin'], weight: ['700', '800'], display: 'swap', variable: '--font-syne' })
const instrument = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-instrument',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLES.home,
  description: DESCRIPTIONS.home,
  authors: [{ name: 'Kean Carl Donato' }],
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  icons: { icon: '/favicon.png' },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Kean Carl Donato | 404 Studio',
    locale: 'en_PH',
    url: SITE_URL + '/',
    title: TITLES.home,
    description: DESCRIPTIONS.home,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kean Carl Donato, web developer portfolio at 404studio.click',
      },
    ],
  },
  twitter: { card: 'summary_large_image', title: TITLES.home, description: DESCRIPTIONS.home, images: ['/og-image.png'] },
}

// Applies the saved theme before first paint so there is no light/dark flash.
const THEME_INIT = `try{var t=localStorage.getItem("t");if(t)document.documentElement.dataset.theme=t}catch(e){}`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${instrument.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Shell>{children}</Shell>
        <FloatingQuote />
      </body>
    </html>
  )
}
