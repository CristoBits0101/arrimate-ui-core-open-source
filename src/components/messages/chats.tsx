'use client'
import Image from 'next/image'
import Link from 'next/link'
import chatBlackSVG from '@/assets/icons/navbar/black/chats.svg'
import chatWhiteSVG from '@/assets/icons/navbar/white/chats.svg'
import { usePathname } from 'next/navigation'

export default function Chats() {
  const path = usePathname()
  return (
    <li>
      <Link href='/chats'>
        {path === '/chats' ? (
          <Image src={chatBlackSVG} alt='chat' />
        ) : (
          <Image src={chatWhiteSVG} alt='chat' />
        )}
      </Link>
    </li>
  )
}
