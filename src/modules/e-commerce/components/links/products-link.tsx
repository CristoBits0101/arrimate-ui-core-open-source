import productsBlackSVG from '@/modules/e-commerce/assets/icons/links/black/products.svg'
import productsWhiteSVG from '@/modules/e-commerce/assets/icons/links/white/products.svg'
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
