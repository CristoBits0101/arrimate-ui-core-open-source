'use client'

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
  return <span onClick={clicked}>{children}</span>
}
