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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value
    if (!term) return
    updateSearch(event.target.value)
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
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  // Effects
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return {
    handleChange,
    handleSubmit,
    isFocused,
    resetSearchInput,
    searchContainerRef,
    searchTerm,
    updateFocus,
    updateReset,
    updateSearch
  }
}
