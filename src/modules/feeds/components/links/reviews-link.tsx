import reviewsBlackSVG from '@/modules/feeds/assets/icons/links/black/reviews.svg'
import reviewsWhiteSVG from '@/modules/feeds/assets/icons/links/white/reviews.svg'
import NavigationItem from '@/modules/navigation/components/links/navbar-link'

export default function Reviews() {
  return (
    <NavigationItem
      route='reviews'
      blackIcon={reviewsBlackSVG}
      whiteIcon={reviewsWhiteSVG}
      textKey='reviews'
    />
  )
}
