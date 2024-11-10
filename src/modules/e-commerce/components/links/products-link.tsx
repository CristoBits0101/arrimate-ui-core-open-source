import productsBlackSVG from '@/assets/icons/navbar/black/products.svg'
import productsWhiteSVG from '@/assets/icons/navbar/white/products.svg'
import NavigationItem from '@/modules/navigation/components/links/navbar-link'

export default function Products() {
  return (
    <NavigationItem
      route='products'
      blackIcon={productsBlackSVG}
      whiteIcon={productsWhiteSVG}
      textKey='products'
    />
  )
}
