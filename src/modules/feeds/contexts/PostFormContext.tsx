import { createContext, useState } from 'react'

// Allowed string types
export type PostFormType =
  | 'story'
  | 'event'
  | 'product'
  | 'short'
  | 'video'
  | 'stream'
  | 'audio'
  | null

// Creating the context
const PostFormContext = createContext<{
  // Context values
  activePostForm: PostFormType
  // Change values from the current context
  changePostForm: (form: PostFormType) => void
} | null>(null)

// Context provider
export function PostFormProvider({ children }: { children: React.ReactNode }) {
  // Controls the states of the context
  const [activePostForm, setActivePostForm] = useState<PostFormType>(null)

  // Context function updates the state with state function
  const changePostForm = (form: PostFormType) => {
    setActivePostForm(form)
  }

  // Returns the provider with the context values and the context function
  return (
    <PostFormContext.Provider value={{ activePostForm, changePostForm }}>
      {children}
    </PostFormContext.Provider>
  )
}

export { PostFormContext }
