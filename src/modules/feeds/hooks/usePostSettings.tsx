'use client'

import { useState } from 'react'

// Available options
type PostOptionType = 'publish' | 'broadcast' | 'manage' | 'performance' | null

export function usePostSettings() {
    // Control option selected
  const [selectedOption, setSelectedOption] = useState<PostOptionType>(null)

  const handleSelectOption = (option: PostOptionType) =>
    setSelectedOption(option)
  const handleBack = () => setSelectedOption(null)

  return {
    selectedOption,
    handleSelectOption,
    handleBack
  }
}
