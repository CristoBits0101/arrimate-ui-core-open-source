import { useState } from 'react'

export default function usePostForm() {
  const [selectedForm, setSelectedForm] = useState<string>()
  const handleSelectForm = (form: string) => setSelectedForm(form)
  return {
    selectedForm,
    handleSelectForm
  }
}
