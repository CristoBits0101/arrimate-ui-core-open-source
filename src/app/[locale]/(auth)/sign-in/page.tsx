import LoginButton from '@/components/auth/login-button'
import Logo from '@/components/branding/logo'
import styles from '@/styles/auth/sign-in.module.css'

export default function SignInPage() {
  return (
    <>
      <Logo centerText={true} />
      <LoginButton>
        <button className={styles.button}>Sign In</button>
      </LoginButton>
    </>
  )
}
