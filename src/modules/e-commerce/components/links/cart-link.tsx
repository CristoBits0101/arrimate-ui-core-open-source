// Import SVG icons for the cart
import cartBlackSVG from '@/modules/e-commerce/assets/icons/black/cart.svg'
import cartWhiteSVG from '@/modules/e-commerce/assets/icons/white/cart.svg'

// Import reusable component for navigation links
import NavigationItem from '@/modules/navigation/components/links/sidebar-link'

// Cart component representing a cart navigation link
export default function Cart() {
  return (
    <NavigationItem
      route='cart'
      blackIcon={cartBlackSVG}
      whiteIcon={cartWhiteSVG}
    />
  )
}
