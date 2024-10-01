'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface SignUpButtonProps {
  href: string
  label: string
}

export default function SignUpButton({ href, label }: SignUpButtonProps) {
  return (
    <Button
      variant="link"
      className="mx-auto font-normal w-full hover:no-underline"
      asChild
    >
      <Link className='text-base' href={href}>{label}</Link>
    </Button>
  )
}
