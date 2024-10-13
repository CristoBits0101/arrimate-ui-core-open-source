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
    <li className='flex items-center justify-center rounded-[2.5rem] w-full h-full pt-2 pb-2 pr-8 pl-8 hover:bg-[#edeced] hover:cursor-pointer transition-colors duration-300'>
      {route === 'home' ? (
        <Link className='truncate flex items-center justify-center h-fit w-fit' href={`/${locale}`}>
          {isActive ? (
            <Image className='flex justify-center items-center w-8 h-w-8 object-contain aspect-square' src={blackIcon} alt={route} />
          ) : (
            <Image className='flex justify-center items-center w-8 h-w-8 object-contain aspect-square' src={whiteIcon} alt={route} />
          )}
          {textKey && t(textKey)}
        </Link>
      ) : (
        <Link className='truncate flex items-center justify-center h-fit w-fit' href={`/${locale}`}>
          {isActive ? (
            <Image className='flex justify-center items-center w-8 h-w-8 object-contain aspect-square' src={blackIcon} alt={route} />
          ) : (
            <Image className='flex justify-center items-center w-8 h-w-8 object-contain aspect-square' src={whiteIcon} alt={route} />
          )}
          {textKey && t(textKey)}
        </Link>
      )}
    </li>
  )
}
