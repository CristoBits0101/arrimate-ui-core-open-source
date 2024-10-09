import reviewsBlackSVG from '@/assets/icons/sidebar/black/reviews.svg'
import reviewsWhiteSVG from '@/assets/icons/sidebar/white/reviews.svg'
import NavigationItem from '@/components/navigation/links/item'

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
