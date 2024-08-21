'use client'

import { PropsWithChildren } from 'react'

// Providers
import { ReactQueryProvider } from './react-query-provider'

export function RootProviders({
  children,
}: Readonly<Required<PropsWithChildren>>) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>
}
