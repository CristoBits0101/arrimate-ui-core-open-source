// Dark icons
import storiesBlackSVG from '@/modules/feeds/assets/icons/links/black/stories-light.svg'
import storiesWhiteSVG from '@/modules/feeds/assets/icons/links/white/stories-light.svg'

// Light icons
// import storiesDarkBlackSVG from '@/modules/feeds/assets/icons/links/black/stories-dark.svg'
// import storiesDarkWhiteSVG from '@/modules/feeds/assets/icons/links/white/stories-dark.svg'

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
