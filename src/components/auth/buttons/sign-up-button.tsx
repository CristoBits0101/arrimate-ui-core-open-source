'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface SignUpButtonProps {
  href: string
  label: string
  page: string
}

export default function SignUpButton({ href, label, page }: SignUpButtonProps) {
  return (
    <Button
      variant='link'
      className='mx-auto font-normal w-full hover:no-underline text-[#1d0f0f] '
      asChild
    >
      <Link className='text-base' href={href}>
      {label}
        <span className='mx-1'> </span> {/* Espacio en un span vacío */}
        <span className='font-medium text-blue-600/75'>{page}</span>
      </Link>
    </Button>
    
  )
}
