'use client'
import Image from 'next/image'
import Link from 'next/link'
import chatBlackSVG from '@/assets/icons/navbar/black/sign-in.svg'
import chatWhiteSVG from '@/assets/icons/navbar/white/sign-in.svg'
import { useActiveRoute } from '@/hooks/useActiveRoute'
import { useLocale } from 'next-intl'

export default function SignIn() {
  const isActive = useActiveRoute('/sign-in')
  return (
    <li>
      <Link href={`/${useLocale()}/sign-in`}>
        {isActive ? (
          <Image src={chatBlackSVG} alt='sign-in' />
        ) : (
          <Image src={chatWhiteSVG} alt='sign-in' />
        )}
      </Link>
    </li>
  )
}
