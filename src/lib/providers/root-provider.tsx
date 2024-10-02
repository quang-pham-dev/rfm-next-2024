'use client'

import { PropsWithChildren } from 'react'

// Providers
import { ReactQueryProvider } from './react-query-provider'
import { ThemeProvider } from './theme-provider'

export function RootProviders({
  children,
}: Readonly<Required<PropsWithChildren>>) {
  return (
    <ThemeProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </ThemeProvider>
  )
}
