'use client'
import Image from 'next/image'
import Link from 'next/link'
import postBlackSVG from '@/assets/icons/navbar/black/post.svg'
import postWhiteSVG from '@/assets/icons/navbar/white/post.svg'
import { usePathname } from 'next/navigation'

export default function Post() {
  const path = usePathname()
  return (
    <li>
      <Link href='/post'>
        {path === '/post' ? (
          <Image src={postBlackSVG} alt='Post' />
        ) : (
          <Image src={postWhiteSVG} alt='Post' />
        )}
      </Link>
    </li>
  )
}
