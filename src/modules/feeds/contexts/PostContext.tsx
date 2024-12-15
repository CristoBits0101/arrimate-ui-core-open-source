'use client'

import { createContext, useState } from 'react'

// Allowed string types
export type PostType =
  | 'story'
  | 'event'
  | 'product'
  | 'short'
  | 'video'
  | 'stream'
  | 'audio'
  | 'manage'
  | 'performance'
  | null

// Creating the context
const PostContext = createContext<{
  // Context values
  activePost: PostType
  // Change values from the current context
  changePost: (option: PostType) => void
} | null>(null)

// Context provider
export function PostProvider({ children }: { children: React.ReactNode }) {
  // Controls the states of the context
  const [activePost, setActivePost] = useState<PostType>(null)

  // Context function updates the state with state function
  const changePost = (option: PostType) => {
    setActivePost(option)
  }

  // Returns the provider with the context values and the context function
  return (
    <PostContext.Provider value={{ activePost, changePost }}>
      {children}
    </PostContext.Provider>
  )
}

export { PostContext }
