'use client'

// Components
import NavigationItem from '@/modules/navigation/menu/components/sidebar-link/sidebar-link'

// Context
import { useThemeContext } from '@/modules/configuration/settings-panel/hooks/useThemeContext'

// Icons
import postDarkBlackSVG from '@/assets/icons/navigation/active/dark-theme/feeds/post-dark-icon.svg'
import postDarkWhiteSVG from '@/assets/icons/navigation/inactive/dark-theme/feeds/post-dark-icon.svg'
import postLightBlackSVG from '@/assets/icons/navigation/active/light-theme/feeds/post-light-icon.svg'
import postLightWhiteSVG from '@/assets/icons/navigation/inactive/light-theme/feeds/post-light-icon.svg'

export default function Post() {
  const { activeTheme } = useThemeContext()

  return (
    <NavigationItem
      route='post'
      blackIcon={activeTheme === 'light' ? postLightBlackSVG : postDarkBlackSVG}
      whiteIcon={activeTheme === 'light' ? postLightWhiteSVG : postDarkWhiteSVG}
    />
  )
}
