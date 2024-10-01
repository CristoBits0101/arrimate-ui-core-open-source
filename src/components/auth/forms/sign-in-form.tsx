import CardWrapper from '@/components/auth/cards/card-wrapper'
import { useLocale } from 'next-intl'

export default function LoginForm() {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      SignUpButtonLabel="Don't have an account? Sign Up"
      SignUpButtonHref={`/${useLocale()}/sign-up`}
      showSocial={true}
    >
      Login form!
    </CardWrapper>
  )
}
