import settingsBlackSVG from '@/modules/configuration/assets/links/black/settings.svg'
import settingsWhiteSVG from '@/modules/configuration/assets/links/white/settings.svg'
import NavigationItem from '@/modules/navigation/components/links/sidebar-link'

export default function Settings() {
  return (
    <NavigationItem
      route='settings'
      blackIcon={settingsBlackSVG}
      whiteIcon={settingsWhiteSVG}
    />
  )
}
