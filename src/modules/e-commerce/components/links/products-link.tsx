// Import SVG icons for the products
import productsBlackSVG from '@/modules/e-commerce/assets/icons/black/products.svg'
import productsWhiteSVG from '@/modules/e-commerce/assets/icons/white/products.svg'

// Import reusable component for navigation links
import NavigationItem from '@/modules/navigation/components/links/navbar-link'

// Products component representing a products navigation link
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
