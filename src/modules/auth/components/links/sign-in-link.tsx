import signInBlackSVG from '@/assets/icons/navbar/black/sign-in.svg'
import signInWhiteSVG from '@/assets/icons/navbar/white/sign-in.svg'
import NavigationItem from '@/modules/navigation/components/links/navbar-link'

export default function SignIn() {
  return (
    <NavigationItem
      route='sign-in'
      blackIcon={signInBlackSVG}
      whiteIcon={signInWhiteSVG}
    />
  )
}
