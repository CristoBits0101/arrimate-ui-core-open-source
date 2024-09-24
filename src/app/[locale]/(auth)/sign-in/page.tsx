import LoginForm from '@/components/auth/login-form'
import Logo from '@/components/branding/logo'
// import styles from '@/styles/auth/sign-in.module.css'

export default function SignInPage() {
  return (
    <>
      <Logo centerText={true} />
      <LoginForm />
    </>
  )
}
