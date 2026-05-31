import type { Metadata } from 'next'
import { DM_Mono, Inter, Manrope } from 'next/font/google'
import Navbar from '@/components/Navbar'
import ProgressBar from '@/components/ProgressBar'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Wilker Martins | Desenvolvedor Web',
  description:
    'Portfolio de Wilker Martins, desenvolvedor web especializado em landing pages, sistemas e interfaces responsivas.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${inter.variable} ${dmMono.variable}`}>
      <body className="bg-bg text-body antialiased" suppressHydrationWarning>
        <ProgressBar />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
