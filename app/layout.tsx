import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Trisol Biopharma - Pharmaceutical Research & Development',
  description: 'Advancing healthcare innovation with precision and purpose. Scientific support for Clinical Research Operations, R&D, Injectable Formulation Development, and Bio-Study Data Research.',
  keywords: ['pharmaceutical', 'CRO', 'R&D', 'clinical research', 'drug development', 'injectable formulation'],
  icons: {
    icon: [
      {
        url: '/favicon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
