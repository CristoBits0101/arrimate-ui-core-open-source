'use client'

import styles from '@/styles/auth/login-button.module.css'

interface LoginButtonProps {
  // Receive the login button
  children: React.ReactNode
  mode?: 'modal' | 'redirect'
  asChild?: boolean
}

export default function LoginButton({
  children,
  mode = 'redirect',
  asChild = false,
}: LoginButtonProps) {
  const clicked = () => console.log('Login button clicked...')
  return (
    <span onClick={clicked} className={styles.span}>
      {children}
    </span>
  )
}
