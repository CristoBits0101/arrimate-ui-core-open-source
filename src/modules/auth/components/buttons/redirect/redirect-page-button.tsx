'use client'

import Link from 'next/link'
import { Button } from '@/modules/ui/button'

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
      className='mx-auto font-normal w-full hover:no-underline text-[#1d0f0f] dark:text-[#D4DBE2]'
      asChild
    >
      <Link className='text-base' href={href}>
        {label}
        <span className='mx-1'> </span>
        <span className='font-medium text-blue-600/75 dark:text-[#AE5471]'>{page}</span>
      </Link>
    </Button>
  )
}
