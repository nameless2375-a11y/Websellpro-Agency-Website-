import type { Metadata, Viewport } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/lib/site'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fbf9f5',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="bg-paper font-sans text-ink-body antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
