'use client'

import { createContext, useState, useEffect, useRef } from 'react'

// 1. Creating the context
const SearchContext = createContext<{
  isFocused: boolean
  resetSearchInput: boolean
  searchTerm: string
  searchContainerRef: React.RefObject<HTMLDivElement>
  updateFocus: (focus: boolean) => void
  updateReset: (reset: boolean) => void
  updateSearch: (term: string) => void
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void
} | null>(null)

// 2. Context provider
export function SearchProvider({ children }: { children: React.ReactNode }) {
  // States
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [resetSearchInput, setResetSearchInput] = useState<boolean>(false)
  const [searchTerm, setSearchTerm] = useState<string>('')

  // Ref
  const searchContainerRef = useRef<HTMLDivElement>(null)

  // Updates
  const updateFocus = (focus: boolean) => {
    setIsFocused(focus)
  }

  const updateReset = (reset: boolean) => {
    setResetSearchInput(reset)
  }

  const updateSearch = (term: string) => {
    setSearchTerm(term)
  }

  // Handlers
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchContainerRef.current &&
      searchContainerRef.current.contains(event.target as Node)
    ) {
      return
    }
    setIsFocused(false)
    setSearchTerm('')
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  // Effects
  useEffect(() => {
    if (resetSearchInput) {
      updateSearch('')
      updateReset(false)
    }
  }, [resetSearchInput])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [searchContainerRef])

  return (
    <SearchContext.Provider
      value={{
        isFocused,
        resetSearchInput,
        searchTerm,
        searchContainerRef,
        updateFocus,
        updateReset,
        updateSearch,
        handleChange,
        handleSubmit
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export { SearchContext }
