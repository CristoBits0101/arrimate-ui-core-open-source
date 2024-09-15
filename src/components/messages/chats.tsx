'use client'
import Image from 'next/image'
import Link from 'next/link'
import chatBlackSVG from '@/assets/icons/navbar/black/chats.svg'
import chatWhiteSVG from '@/assets/icons/navbar/white/chats.svg'
import { useActiveRoute } from '@/hooks/useActiveRoute'
import { useLocale } from 'next-intl'

export default function Chats() {
  const isActive = useActiveRoute('/chats')
  return (
    <li>
      <Link href={`/${useLocale()}/chats`}>
        {isActive ? (
          <Image src={chatBlackSVG} alt='chat' />
        ) : (
          <Image src={chatWhiteSVG} alt='chat' />
        )}
      </Link>
    </li>
  )
}
