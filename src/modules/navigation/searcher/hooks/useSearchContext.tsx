'use client'

// Custom
import { SearchContext } from '@/modules/navigation/searcher/context/SearchContext'

// Hooks
import { useContext } from 'react'

export const useSearchContext = () => {
  // 1. Get the value from the context
  const context = useContext(SearchContext)

  // 2. Check if the context is available
  if (!context) throw new Error('Search context not found in useSearchContext!')

  // 3. Returns the value of the context
  return context
}
