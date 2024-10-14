'use client'

import Logo from '@/components/branding/application-logo'
import ReturnSearchEngine from '@/components/navigation/rendering/return-search-engine'

export default function Header() {
  return (
    <header className='col-span-1'>
      <Logo />
      <ReturnSearchEngine />
    </header>
  )
}
