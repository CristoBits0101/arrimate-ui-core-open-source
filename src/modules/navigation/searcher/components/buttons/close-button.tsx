// Hooks
import useSearch from '@/modules/navigation/searcher/hooks/useSearch'

// Icons
import closeIcon from '@/assets/icons/buttons/inactive/light-theme/windows/close-light-icon.svg'

// Images
import Image from 'next/image'

export default function CloseButton() {
  // Decomposition
  const { updateFocus } = useSearch()
  
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
