import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Inter } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const inter = Inter({ subsets: ['latin'] }) // Keeping Inter for global use

export const metadata: Metadata = {
  title: 'irhamna.ai - The Future of AI',
  description: 'Experience the next generation of AI with irhamna.ai',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lato:ital,wght@0,100;1,300&family=Noto+Sans+Kawi:wght@500&family=Orbitron:wght@400..900&family=Spline+Sans:wght@300..700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} bg-cyber-black text-white`}
      >
        <div className='cyber-lines'></div>
        {children}
      </body>
    </html>
  )
}
