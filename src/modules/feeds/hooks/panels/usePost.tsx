'use client'

// Custom context
import { PostContext } from '@/modules/feeds/create-post/contexts/PostContext'

// React hook
import { useContext } from 'react'

export const usePost = () => {
  // 1. Get the context value
  const context = useContext(PostContext)
  // 2. Check if the context is provided
  if (!context) throw new Error('Supplier context not found in usePost!')
  // 3. Return the context value
  return context
}
