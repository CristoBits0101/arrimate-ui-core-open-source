'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePageIcon } from '@/modules/navigation/hooks/useIcon'
import { useLocale, useTranslations } from 'next-intl'

interface NavigationItemProps {
  route: string
  blackIcon: string
  whiteIcon: string
  textKey?: string
}

export default function SidebarItem({
  route,
  blackIcon,
  whiteIcon,
  textKey
}: NavigationItemProps) {
  const isActive = usePageIcon(route)
  const locale = useLocale()
  const t = useTranslations('SidebarLayout')

  const href = route === 'home' ? `/${locale}` : `/${locale}/${route}`

  return (
    <li className='flex items-center justify-center w-fit h-fit pt-1 pb-1 hover:cursor-pointer'>
      <Link
        className='flex items-center justify-center h-fit w-fit gap-4'
        href={href}
      >
        <Image
          className='w-7 h-7 object-contain aspect-square'
          src={isActive ? blackIcon : whiteIcon}
          alt={route}
        />
        {textKey && t(textKey)}
      </Link>
    </li>
  )
}
