import { Inter } from 'next/font/google'

// Providers
import { RootProviders } from '@/lib/providers'

// Styles
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootProviders>
          <main>{children}</main>
        </RootProviders>
      </body>
    </html>
  )
}
