'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePageIcon } from '@/hooks/useIcon'
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
  const isActive = usePageIcon(route)
  const locale = useLocale()
  const t = useTranslations('SidebarLayout')

  return (
    <li className='truncate flex items-center justify-center w-fit h-fit pt-2 pb-2 hover:cursor-pointer'>
      {route === 'home' ? (
        <Link className='flex items-center justify-center h-fit w-fit' href={`/${locale}`}>
          {isActive ? (
            <Image className='flex justify-center items-center w-8 h-8 object-contain aspect-square' src={blackIcon} alt={route} />
          ) : (
            <Image className='flex justify-center items-center w-8 h-8 object-contain aspect-square' src={whiteIcon} alt={route} />
          )}
          {textKey && t(textKey)}
        </Link>
      ) : (
        <Link className='flex items-center justify-center h-fit w-fit' href={`/${locale}`}>
          {isActive ? (
            <Image className='flex justify-center items-center w-8 h-8 object-contain aspect-square' src={blackIcon} alt={route} />
          ) : (
            <Image className='flex justify-center items-center w-8 h-8 object-contain aspect-square' src={whiteIcon} alt={route} />
          )}
          {textKey && t(textKey)}
        </Link>
      )}
    </li>
  )
}
