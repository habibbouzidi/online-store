import Header from '@/components/Header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import Footer from '@/components/Footer/Footer'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['italic', 'normal'],
  variable: '--font-poppins'
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['italic', 'normal'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: 'Online Store',
  description: 'This is online games store',
  authors: [{name: "Habib Bouzidi"}]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body>
        <Header/>
        <main className='bg-primary-gradient min-h-screen'>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
