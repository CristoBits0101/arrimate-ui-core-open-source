'use client'
import Image from 'next/image'
import Link from 'next/link'
import productsBlackSVG from '@/assets/icons/sidebar/black/products.svg'
import productsWhiteSVG from '@/assets/icons/sidebar/white/products.svg'
import { useActiveRoute } from '@/hooks/useActiveRoute'
import { useLocale, useTranslations } from 'next-intl'

export default function Products() {
  const isActive = useActiveRoute('products')
  const t = useTranslations('SidebarLayout')
  return (
    <li>
      <Link href={`/${useLocale()}/products`}> 
        {isActive ? (
          <Image src={productsBlackSVG} alt='Products' />
        ) : (
          <Image src={productsWhiteSVG} alt='Products' />
        )}
        {t('products')}
      </Link>
    </li>
  )
}
