import homeBlackSVG from '@/assets/icons/navbar/black/home.svg'
import homeWhiteSVG from '@/assets/icons/navbar/white/home.svg'
import NavigationItem from '@/components/navigation/links/item'

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
