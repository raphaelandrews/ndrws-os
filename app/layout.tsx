import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { cn } from '@/lib/utils'
import { AboutApp } from '@/components/apps/about-app'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ndrwsOS',
  description: "Andrews's Operating System",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          
          inter.className
        )}
      >
        <AboutApp />
        {children}
      </body>
    </html>
  )
}
