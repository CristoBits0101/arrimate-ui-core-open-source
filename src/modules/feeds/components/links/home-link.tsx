import homeBlackSVG from '@/modules/feeds/assets/icons/links/black/home.svg'
import homeWhiteSVG from '@/modules/feeds/assets/icons/links/white/home.svg'
import NavigationItem from '@/modules/navigation/components/links/navbar-link'

export default function Home() {
  return (
    <NavigationItem
      route='home'
      blackIcon={homeBlackSVG}
      whiteIcon={homeWhiteSVG}
      textKey='home'
    />
  )
}
