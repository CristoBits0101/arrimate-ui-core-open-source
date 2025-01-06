'use client'

import { createContext, useState } from 'react'

// 1. Allowed string types
export type ThemeType = 'dark' | 'light' | 'system'

// 2. Creating the context
const ThemeContext = createContext<{
  // 2.1. Context values
  activeTheme: ThemeType
  // 2.2. Change values from the current context
  changeTheme: (option: ThemeType) => void
} | null>(null)

// 3. Context provider
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // 3.1. Controls the states of the context
  const [activeTheme, setActiveTheme] = useState<ThemeType>('system')

  // 3.2. Context function updates the state with state function
  const changeTheme = (option: ThemeType) => {
    setActiveTheme(option)
  }

  // 4. Returns the provider with the context values and the context function
  return (
    <ThemeContext.Provider value={{ activeTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext }
