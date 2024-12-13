'use client'

import { useState } from 'react'
type PostOptionType = 'publish' | 'stream' | 'manage' | 'performance' | null

export function usePostSettings() {
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
