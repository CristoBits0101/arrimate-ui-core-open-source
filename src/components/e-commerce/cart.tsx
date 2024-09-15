'use client'
import Image from 'next/image'
import Link from 'next/link'
import cartBlackSVG from '@/assets/icons/navbar/black/cart.svg'
import cartWhiteSVG from '@/assets/icons/navbar/white/cart.svg'
import { usePathname } from 'next/navigation'

export default function Cart() {
  const path = usePathname()
  return (
    <li>
      <Link href='/cart'>
        {path === '/cart' ? (
          <Image src={cartBlackSVG} alt='cart' />
        ) : (
          <Image src={cartWhiteSVG} alt='cart' />
        )}
      </Link>
    </li>
  )
}
