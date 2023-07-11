import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
          "bg-[url('../assets/images/mesh-background-sm.png')]",
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  )
}
