import signInBlackSVG from '@/assets/icons/navbar/black/sign-in.svg'
import signInWhiteSVG from '@/assets/icons/navbar/white/sign-in.svg'
import NavigationItem from '@/components/navigation/menu/item'

export default function SignIn() {
  return (
    <NavigationItem
      route='sign-in'
      blackIcon={signInBlackSVG}
      whiteIcon={signInWhiteSVG}
    />
  )
}
