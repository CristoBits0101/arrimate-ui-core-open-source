import productsBlackSVG from '@/assets/icons/navbar/black/products.svg'
import productsWhiteSVG from '@/assets/icons/navbar/white/products.svg'
import NavigationItem from '@/components/navigation/links/navbar-link'

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
