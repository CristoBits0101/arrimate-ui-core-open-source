'use client'

import { useState } from 'react'

// Define las opciones disponibles
type PostOptionType = 'publish' | 'broadcast' | 'manage' | 'performance' | null

export function usePostSettings() {
  // Controla la opción seleccionada
  const [selectedOption, setSelectedOption] = useState<PostOptionType>(null)

  // Cambia la opción seleccionada
  const handleSelectOption = (option: PostOptionType) =>
    setSelectedOption(option)

  // Vuelve al panel principal
  const handleBack = () => setSelectedOption(null)

  return {
    selectedOption,
    handleSelectOption,
    handleBack
  }
}
