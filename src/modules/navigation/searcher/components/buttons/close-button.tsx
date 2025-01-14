'use client'

// Hooks
import { useSearchContext } from '@/modules/navigation/searcher/hooks/useSearchContext'

// Icons
import closeIcon from '@/assets/icons/buttons/inactive/light-theme/windows/close-light-icon.svg'

// Images
import Image from 'next/image'

export default function CloseButton() {
  // Context
  const { updateFocus } = useSearchContext()

  return (
    <button
      onClick={() => {
        updateFocus(false)
      }}
    >
      <Image className='w-4' src={closeIcon} alt='Close' />
    </button>
  )
}
