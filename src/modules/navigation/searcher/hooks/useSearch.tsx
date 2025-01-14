// Hooks
import { useState, useEffect, useRef } from 'react'

export default function useSearch() {
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
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target as Node)
    ) {
      setIsFocused(false)
      setSearchTerm('')
    }
  }

  // Effects
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return {
    handleSubmit,
    isFocused,
    updateFocus,
    resetSearchInput,
    updateReset,
    searchTerm,
    updateSearch,
    searchContainerRef
  }
}
