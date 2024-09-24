'use client'

import { useRouter } from 'next/router'
import styles from '@/styles/auth/login-button.module.css'

interface LoginButtonProps {
  // Button content
  children: React.ReactNode
  // Button mode
  mode?: 'modal' | 'redirect'
  // Render as child
  asChild?: boolean
}

export default function LoginButton({
  children,
  mode = 'redirect',
  asChild = false,
}: LoginButtonProps) {
  //
  const router = useRouter()
  const clicked = () => router.push('/sign-in')
  if (mode === 'modal') {
    return <span>TODO: Implement modal</span>
  }
  return (
    <span onClick={clicked} className={styles.span}>
      {children}
    </span>
  )
}
