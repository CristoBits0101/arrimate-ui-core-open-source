'use client'

import Link from 'next/link'

interface RedirectButtonProps {
  href: string
  label?: string
  page?: string
}

export default function RedirectButton({
  href,
  label,
  page
}: RedirectButtonProps) {
  return (
    <button className='mx-auto font-normal w-full hover:no-underline text-[#1d0f0f]'>
      <Link className='text-base dark:text-[#ececed]' href={href}>
        {label && label}
        {label && <span className='ml-1'> </span>}
        <span className='font-medium text-blue-600/75 dark:text-[#FFD700]'>
          {page && page}
        </span>
      </Link>
    </button>
  )
}
