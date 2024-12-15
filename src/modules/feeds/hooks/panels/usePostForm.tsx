// Custom context
import { PostFormContext } from '@/modules/feeds/contexts/PostFormContext'

// React hook
import { useContext } from 'react'

export const usePostForm = () => {
  // Get the context value
  const context = useContext(PostFormContext)
  // Check if the context is provided
  if (!context) throw new Error('Supplier context not found in usePostForm!')
  // Return the context value
  return context
}
