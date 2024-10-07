import homeBlackSVG from '@/assets/icons/sidebar/black/home.svg'
import homeWhiteSVG from '@/assets/icons/sidebar/white/home.svg'
import NavigationItem from '@/components/navigation/navigation-item'

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
