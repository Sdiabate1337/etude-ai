import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '∑tude.ai - Transforme tes cours en projets concrets',
  description: 'Plateforme d\'apprentissage panafricaine avec mentor IA 24/7 et communauté d\'étudiants collaboratifs',
  keywords: ['éducation', 'Afrique', 'IA', 'apprentissage', 'étudiants', 'projets', 'collaboration'],
  authors: [{ name: 'Sdiabate1337' }],
  openGraph: {
    title: '∑tude.ai - L\'avenir de l\'éducation africaine',
    description: 'Transforme tes cours théoriques en projets concrets avec un mentor IA et une communauté panafricaine',
    url: 'https://etude-ai.com',
    siteName: '∑tude.ai',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '∑tude.ai - Éducation africaine révolutionnaire',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '∑tude.ai - Transforme tes cours en projets concrets',
    description: 'Plateforme d\'apprentissage panafricaine avec mentor IA 24/7',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}