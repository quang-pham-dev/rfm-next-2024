'use client'

import { PropsWithChildren, useState } from 'react'
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const STALE_TIME = 1000 * 60 * 5 // 5 minutes

export const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: STALE_TIME,
    },
    mutations: {
      onError: error => {
        console.error('An error occurred: ' + error.message)
      },
    },
  },
}

export function ReactQueryProvider({
  children,
}: Readonly<Required<PropsWithChildren>>) {
  const [queryClient] = useState(() => new QueryClient(queryClientConfig))

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
