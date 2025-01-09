'use client'

// Custom context
import { ThemeContext } from '@/modules/configuration/settings-panel/contexts/ThemeContext'

// React hook
import { useContext } from 'react'

export const useThemeContext = () => {
  // 1. Get the context value
  const context = useContext(ThemeContext)
  // 2. Check if the context is provided
  if (!context) throw new Error('Supplier context not found in useTheme!')
  // 3. Return the context value
  return context
}
