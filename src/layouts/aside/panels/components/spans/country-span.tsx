// Context
import { useThemeContext } from '@/modules/configuration/settings-panel/hooks/useThemeContext'

// Icons
import locationDarkIcon from '@/assets/icons/cards/location-dark-icon.svg'
import locationLightIcon from '@/assets/icons/cards/location-light-icon.svg'

// Image
import Image from 'next/image'

interface CountrySpanProps {
  countryCode?: string
}

export default function CountrySpan({ countryCode }: CountrySpanProps) {
  // Context
  const { activeTheme } = useThemeContext()
  if (!countryCode) return null
  return (
    <span className='w-fit h-fit font-light text-xs flex items-center justify-center gap-0.5 dark:text-[#ececed]'>
      <Image
        src={activeTheme === 'light' ? locationLightIcon : locationDarkIcon}
        alt={`${countryCode} flag`}
        className='w-5 h-5 aspect-square object-contain rounded-full'
      />
      {countryCode}
    </span>
  )
}
