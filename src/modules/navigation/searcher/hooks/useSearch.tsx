// Hooks
import { useState } from 'react'

export default function useSearch() {
  // State
  const [searchTerm, setSearchTerm] = useState('')

  // Update
  const updateSearch = (term: string) => {
    setSearchTerm(term)
  }

  return {
    searchTerm,
    updateSearch
  }
}
