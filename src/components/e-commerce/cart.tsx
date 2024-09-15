'use client'
import Image from 'next/image'
import Link from 'next/link'
import cartBlackSVG from '@/assets/icons/navbar/black/cart.svg'
import cartWhiteSVG from '@/assets/icons/navbar/white/cart.svg'
import { useActiveRoute } from '@/hooks/useActiveRoute'
import { useLocale } from 'next-intl'

export default function Cart() {
  const isActive = useActiveRoute('/cart')
  return (
    <li>
      <Link href={`/${useLocale()}/cart`}>
        {isActive ? (
          <Image src={cartBlackSVG} alt='Shopping cart' />
        ) : (
          <Image src={cartWhiteSVG} alt='Shopping cart' />
        )}
      </Link>
    </li>
  )
}
