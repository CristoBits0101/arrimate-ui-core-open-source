'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useActiveRoute } from '@/hooks/useCheckActiveRoute'
import { useLocale, useTranslations } from 'next-intl'

interface NavigationItemProps {
  route: string
  blackIcon: string
  whiteIcon: string
  textKey?: string
}

export default function NavigationItem({
  route,
  blackIcon,
  whiteIcon,
  textKey
}: NavigationItemProps) {
  const isActive = useActiveRoute(route)
  const locale = useLocale()
  const t = useTranslations('SidebarLayout')

  return (
    <li>
      {route === 'home' ? (
        <Link className='truncate' href={`/${locale}`}>
          {isActive ? (
            <Image src={blackIcon} alt={route} />
          ) : (
            <Image src={whiteIcon} alt={route} />
          )}
          {textKey && t(textKey)}
        </Link>
      ) : (
        <Link className='truncate' href={`/${locale}/${route}`}>
          {isActive ? (
            <Image src={blackIcon} alt={route} />
          ) : (
            <Image src={whiteIcon} alt={route} />
          )}
          {textKey && t(textKey)}
        </Link>
      )}
    </li>
  )
}
