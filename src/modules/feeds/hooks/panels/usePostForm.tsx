import { createContext, useContext, useState } from 'react'

type FormOptionType =
  | 'story'
  | 'event'
  | 'product'
  | 'short'
  | 'video'
  | 'stream'
  | 'audio'
  | null

const PostFormContext = createContext<{
  selectedForm: FormOptionType
  handleSelectForm: (form: FormOptionType) => void
} | null>(null)

export function PostFormProvider({ children }: { children: React.ReactNode }) {
  const [selectedForm, setSelectedForm] = useState<FormOptionType>(null)
  const handleSelectForm = (form: FormOptionType) => setSelectedForm(form)
  return (
    <PostFormContext.Provider value={{ selectedForm, handleSelectForm }}>
      {children}
    </PostFormContext.Provider>
  )
}

export function usePostForm() {
  const context = useContext(PostFormContext)
  if (!context)
    throw new Error('usePostForm must be used within a PostFormProvider')
  return context
}
