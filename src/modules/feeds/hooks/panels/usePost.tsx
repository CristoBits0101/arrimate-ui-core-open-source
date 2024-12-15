'use client'

// Custom context
import { PostContext } from '@/modules/feeds/contexts/PostContext'

// React hook
import { useContext } from 'react'

export const usePost = () => {
  // Get the context value
  const context = useContext(PostContext)
  // Check if the context is provided
  if (!context) throw new Error('Supplier context not found in usePost!')
  // Return the context value
  return context
}
