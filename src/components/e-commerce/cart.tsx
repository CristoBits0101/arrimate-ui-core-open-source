import cartBlackSVG from '@/assets/icons/navbar/black/cart.svg'
import cartWhiteSVG from '@/assets/icons/navbar/white/cart.svg'
import NavigationItem from '@/components/navigation/menu/item'

export default function Cart() {
  return (
    <NavigationItem
      route='cart'
      blackIcon={cartBlackSVG}
      whiteIcon={cartWhiteSVG}
    />
  )
}
