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
  description: 'Tu veux appliquer enfin ce que tu apprends ? ∑tude.ai est la 1re plateforme d’apprentissage pratique en Afrique, avec mentor IA 24/7, projets réels et communauté collaborative.',
  keywords: [
  'plateforme éducative Afrique',
  'projets étudiants concrets',
  'mentor IA 24/7',
  'apprentissage pratique pour étudiants africains',
  'portfolio étudiant Afrique',
],
  authors: [{ name: 'Sdiabate1337' }],
  openGraph: {
    title: '∑tude.ai - Transforme tes cours en projets concrets',
    description: 'Transforme tes cours théoriques en projets concrets avec un mentor IA et une communauté panafricaine',
    url: 'https://etude-ai.vercel.app/',
    siteName: '∑tude.ai',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '∑tude.ai - Transforme tes cours en projets concrets',
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