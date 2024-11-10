import cartBlackSVG from '@/modules/e-commerce/assets/icons/links/black/cart.svg'
import cartWhiteSVG from '@/modules/e-commerce/assets/icons/links/white/cart.svg'
import NavigationItem from '@/modules/navigation/components/links/sidebar-link'

export default function Cart() {
  return (
    <NavigationItem
      route='cart'
      blackIcon={cartBlackSVG}
      whiteIcon={cartWhiteSVG}
    />
  )
}
