import LoginButton from '@/components/auth/login-button'
import Logo from '@/components/branding/logo'
export default function SignInPage() {
  return (
    <main>
     <Logo centerText={true} />
      <LoginButton>
        <button>Sign In</button>
      </LoginButton>
    </main>
  )
}
