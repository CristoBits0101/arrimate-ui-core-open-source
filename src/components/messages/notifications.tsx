'use client'
import Image from 'next/image'
import Link from 'next/link'
import notificationsBlackSVG from '@/assets/icons/navbar/black/notifications.svg'
import notificationsWhiteSVG from '@/assets/icons/navbar/white/notifications.svg'
import { usePathname } from 'next/navigation'

export default function Notifications() {
  const path = usePathname()
  return (
    <li>
      <Link href='/notifications'>
        {path === '/notifications' ? (
          <Image src={notificationsBlackSVG} alt='Notifications' />
        ) : (
          <Image src={notificationsWhiteSVG} alt='Notifications' />
        )}
      </Link>
    </li>
  )
}
