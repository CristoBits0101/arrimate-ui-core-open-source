import CardWrapper from '@/components/auth/cards/card-wrapper'

export default function LoginForm() {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/sign-up"
      showSocial={true}
    >
      Login form!
    </CardWrapper>
  )
}
