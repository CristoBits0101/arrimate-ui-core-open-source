'use client'

// Hooks
import { useSearchContext } from '@/modules/navigation/searcher/hooks/useSearchContext'

// Icons
import clearIcon from '@/assets/icons/buttons/inactive/light-theme/windows/clear-light-icon.svg'

// Images
import Image from 'next/image'

export default function ClearButton() {
  // Context
  const { updateReset } = useSearchContext()

  return (
    <button
      onClick={() => {
        updateReset(true)
      }}
    >
      <Image className='w-4' src={clearIcon} alt='Close' />
    </button>
  )
}
