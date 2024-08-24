import { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Providers
import { RootProviders } from '@/lib/providers'

// Styles
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RFM Next 2024',
  description: 'NextJS with simple config',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <RootProviders>
          <main>{children}</main>
        </RootProviders>
      </body>
    </html>
  )
}
