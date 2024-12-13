import storiesBlackSVG from '@/modules/feeds/assets/icons/links/black/stories.svg'
import storiesWhiteSVG from '@/modules/feeds/assets/icons/links/white/stories.svg'
import NavigationItem from '@/modules/navigation/components/links/navbar-link'

export default function stories() {
  return (
    <NavigationItem
      route='stories'
      blackIcon={storiesBlackSVG}
      whiteIcon={storiesWhiteSVG}
      textKey='stories'
    />
  )
}
