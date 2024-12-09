// Imports the black SVG icon for the settings link
import settingsBlackSVG from '@/modules/configuration/assets/icons/links/black/settings.svg'

// Imports the white SVG icon for the settings link
import settingsWhiteSVG from '@/modules/configuration/assets/icons/links/white/settings.svg'

// Imports the NavigationItem component for creating sidebar links
import NavigationItem from '@/modules/navigation/components/links/sidebar-link'

// Defines the Settings component
export default function Settings() {
  // Renders a NavigationItem component with settings-specific props
  return (
    <NavigationItem
      route='settings' // The route associated with the settings link
      blackIcon={settingsBlackSVG} // Black icon for inactive state
      whiteIcon={settingsWhiteSVG} // White icon for active state
    />
  )
}
