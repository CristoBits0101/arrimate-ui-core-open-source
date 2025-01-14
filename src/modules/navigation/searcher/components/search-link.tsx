'use client'

import Image from 'next/image'
import Link from 'next/link'

interface SearchLinkProps {
  // data: { id: string; title: string }[]
  // locale: string
  iconSrc: string
  // hrefBase: string
  // altText: string
}

export default function SearchLink({ iconSrc }: SearchLinkProps) {
  return (
    <li className='truncate w-full pr-4 pl-4 pt-1 pb-1 hover:bg-[#F4F4F4]'>
      <Link
        href=''
        className='truncate flex gap-2 items-center dark:text-white'
      >
        <Image className='w-5' src={iconSrc} alt='Search' />
        Data
      </Link>
    </li>
  )
}
