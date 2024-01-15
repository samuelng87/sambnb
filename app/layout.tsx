import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Container from './components/Container'
import Navbar from './components/navbar/Navbar'
import YoutubeEmbed from './components/Video'
import './globals.css'
import Blue from './components/blue'
import Hero from './components/Hero'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>


        <Hero/>

        
        {children}
        </body>


    </html>
  )
}
