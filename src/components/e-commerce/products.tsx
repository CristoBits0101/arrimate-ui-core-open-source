import productsBlackSVG from '@/assets/icons/sidebar/black/products.svg'
import productsWhiteSVG from '@/assets/icons/sidebar/white/products.svg'
import NavigationItem from '@/components/navigation/menu/item'

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
