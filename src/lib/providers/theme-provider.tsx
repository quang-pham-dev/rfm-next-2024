'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

// Constants
import { THEME_DEFAULT, THEME_STORAGE_KEY } from '@/constants'

export function ThemeProvider({
  children,
  ...props
}: Readonly<ThemeProviderProps>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={THEME_DEFAULT}
      enableSystem
      storageKey={THEME_STORAGE_KEY}
      disableTransitionOnChange
      {...props}>
      {children}
    </NextThemesProvider>
  )
}
