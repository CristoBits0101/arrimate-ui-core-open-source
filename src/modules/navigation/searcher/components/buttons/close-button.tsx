'use client'

// Context
import { useThemeContext } from '@/modules/configuration/settings-panel/hooks/useThemeContext'
import { useSearchContext } from '@/modules/navigation/searcher/hooks/useSearchContext'

// Icons
import closeDarkIcon from '@/assets/icons/buttons/inactive/dark-theme/windows/close-dark-icon.svg'
import closeLightIcon from '@/assets/icons/buttons/inactive/light-theme/windows/close-light-icon.svg'

// Images
import Image from 'next/image'

export default function CloseButton() {
  // Context
  const { activeTheme } = useThemeContext()
  const { updateFocus } = useSearchContext()

  return (
    <button
      onClick={() => {
        updateFocus(false)
      }}
    >
      <Image
        className='w-4'
        src={activeTheme === 'light' ? closeLightIcon : closeDarkIcon}
        alt='Close'
      />
    </button>
  )
}
