'use client'
import Image from 'next/image'
import Link from 'next/link'
import notificationsBlackSVG from '@/assets/icons/navbar/black/notifications.svg'
import notificationsWhiteSVG from '@/assets/icons/navbar/white/notifications.svg'
import { useActiveRoute } from '@/hooks/useActiveRoute'
import { useLocale } from 'next-intl'

export default function Notifications() {
  const isActive = useActiveRoute('/notifications')
  return (
    <li>
      <Link href={`/${useLocale()}/notifications`}>
        {isActive ? (
          <Image src={notificationsBlackSVG} alt='Notifications' />
        ) : (
          <Image src={notificationsWhiteSVG} alt='Notifications' />
        )}
      </Link>
    </li>
  )
}
