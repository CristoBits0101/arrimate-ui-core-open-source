// Hooks
import { useState, useRef, useEffect } from 'react'

// Intl
import { useLocale } from 'next-intl'

export function useSearch() {
  // Reset search input
  const [resetSearchInput, setResetSearchInput] = useState<boolean>(false)
  // Capture the text that is being written
  const [searchTerm, setSearchTerm] = useState<string>('')
  // Detects if the search bar has focus
  const [isFocused, setIsFocused] = useState<boolean>(false)
  // Contains the reference of the menu container
  const searchContainerRef = useRef<HTMLDivElement>(null)
  // Get the language of the web
  const locale = useLocale()

  // Update the status of the search term
  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }

  // Update if the search engine has focus
  const handleFocus = () => {
    setIsFocused(true)
  }

  useEffect(() => {
    if (resetSearchInput) setSearchTerm('')
  }, [resetSearchInput])

  // Closes search menu on outside click
  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target as Node)
    ) {
      setIsFocused(false)
      setSearchTerm('')
    }
  }

  // Listen for outside clicks on search container
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return {
    searchTerm,
    isFocused,
    resetSearchInput,
    setResetSearchInput,
    handleSearch,
    handleFocus,
    searchContainerRef,
    locale,
    setIsFocused
  }
}
