'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface RedirectButtonProps {
  href: string
  label: string
  page: string
}

export default function RedirectButton({
  href,
  label,
  page
}: RedirectButtonProps) {
  return (
    <Button
      variant='link'
      className='mx-auto font-normal w-full hover:no-underline text-[#1d0f0f] '
      asChild
    >
      <Link className='text-base' href={href}>
        {label}
        <span className='mx-1'> </span>
        <span className='font-medium text-blue-600/75'>{page}</span>
      </Link>
    </Button>
  )
}
