import type { Metadata } from 'next'
import { Syne, DM_Mono } from 'next/font/google'
import './globals.css'
import Cursor from '@/components/Cursor'
import ProgressBar from '@/components/ProgressBar'
import Navbar from '@/components/Navbar'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Wilker Martins — Desenvolvedor de Soluções Web',
  description:
    'Portfólio de Wilker Martins, desenvolvedor web especializado em React, Next.js e soluções web modernas.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${dmMono.variable}`}>
      <body className="bg-bg text-fg font-mono antialiased">
        <Cursor />
        <ProgressBar />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
