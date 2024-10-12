import settingsBlackSVG from '@/assets/icons/sidebar/black/settings.svg'
import settingsWhiteSVG from '@/assets/icons/sidebar/white/settings.svg'
import NavigationItem from '@/components/navigation/links/item'

export default function Settings() {
  return (
    <NavigationItem
      route='settings'
      blackIcon={settingsBlackSVG}
      whiteIcon={settingsWhiteSVG}
    />
  )
}
