'use client'

import Logo from '@/modules/marketing/components/branding/branding-logo'
import ReturnSearchEngine from '@/modules/navigation/components/rendering/rendering-search-engine'

export default function Header() {
  return (
    <header className='header col-span-1'>
      <Logo />
      <ReturnSearchEngine />
    </header>
  )
}
