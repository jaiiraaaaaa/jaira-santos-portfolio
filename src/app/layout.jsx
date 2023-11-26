import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "./navbar.jsx";
import {Analytics} from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Misael Andrei Marin',
  description: 'Misael Andrei Marin - Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <Navbar/>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
