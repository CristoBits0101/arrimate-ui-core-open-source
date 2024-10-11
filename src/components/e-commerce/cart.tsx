import cartBlackSVG from '@/assets/icons/sidebar/black/cart.svg'
import cartWhiteSVG from '@/assets/icons/sidebar/white/cart.svg'
import NavigationItem from '@/components/navigation/links/item'

export default function Cart() {
  return (
    <NavigationItem
      route='cart'
      blackIcon={cartBlackSVG}
      whiteIcon={cartWhiteSVG}
    />
  )
}
