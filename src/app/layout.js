'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SessionTestContext } from '@/context/SessionContext';
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Test Elections</title>
      </head>
      <body className={inter.className}>
        <SessionTestContext>
        {children}
        </SessionTestContext>
        </body>
    </html>
  )
}
