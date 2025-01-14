// Hooks
import useSearch from '@/modules/navigation/searcher/hooks/useSearch'

// Icons
import clearIcon from '@/assets/icons/buttons/inactive/light-theme/windows/clear-light-icon.svg'

// Images
import Image from 'next/image'

export default function ClearButton() {
  // Decomposition
  const { updateReset } = useSearch()
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
