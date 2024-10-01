'use client'
import Image from 'next/image'
import Link from 'next/link'
import postBlackSVG from '@/assets/icons/navbar/black/post.svg'
import postWhiteSVG from '@/assets/icons/navbar/white/post.svg'
import { useActiveRoute } from '@/hooks/useActiveRoute'
import { useLocale } from 'next-intl'

export default function Post() {
  const isActive = useActiveRoute('/post')
  return (
    <li>
      <Link href={`/${useLocale()}/post`}>
        {isActive ? (
          <Image src={postBlackSVG} alt='Post' />
        ) : (
          <Image src={postWhiteSVG} alt='Post' />
        )}
      </Link>
    </li>
  )
}
