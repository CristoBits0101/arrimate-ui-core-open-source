'use client'

// Context
import { useThemeContext } from '@/modules/configuration/settings-panel/hooks/useThemeContext'
import { useSearchContext } from '@/modules/navigation/searcher/hooks/useSearchContext'

// Icons
import clearDarkIcon from '@/assets/icons/buttons/inactive/dark-theme/windows/clear-dark-icon.svg'
import clearLightIcon from '@/assets/icons/buttons/inactive/light-theme/windows/clear-light-icon.svg'

// Images
import Image from 'next/image'

export default function ClearButton() {
  // Context
  const { activeTheme } = useThemeContext()
  const { updateReset } = useSearchContext()

  return (
    <button
      onClick={() => {
        updateReset(true)
      }}
    >
      <Image
        className='w-4'
        src={activeTheme === 'light' ? clearLightIcon : clearDarkIcon}
        alt='Close'
      />
    </button>
  )
}
