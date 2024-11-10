'use client'

import { useRouter } from 'next/router'

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
  mode = 'redirect'
}:
LoginButtonProps) {
  const router = useRouter()
  const clicked = () => router.push('/sign-in')
  if (mode === 'modal') {
    return <span>TODO: Implement modal</span>
  }
  return (
    <span onClick={clicked} className='grid place-content-center'>
      {children}
    </span>
  )
}
