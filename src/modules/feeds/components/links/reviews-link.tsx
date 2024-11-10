import reviewsBlackSVG from '@/assets/icons/navbar/black/reviews.svg'
import reviewsWhiteSVG from '@/assets/icons/navbar/white/reviews.svg'
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
