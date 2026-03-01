import type { Metadata, Viewport } from 'next'
import { Albert_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const albertSans = Albert_Sans({ subsets: ["latin"], variable: "--font-albert" });

export const metadata: Metadata = {
  title: 'Tom Engelibert - React Developer',
  description: 'Portfolio of Tom Engelibert, a React/Symfony developer available for opportunities.',
  icons: {
    icon: [
      {
        url: '/images/portfolio.png',
        media: '(prefers-color-scheme: light)',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#40C529',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${albertSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
