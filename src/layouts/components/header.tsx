'use client'

import Logo from '@/modules/marketing/components/branding/branding-logo'
import ReturnSearchEngine from '@/modules/navigation/components/rendering/rendering-search-engine'

export default function Header() {
  return (
    <header className='hidden md:flex col-span-1 border-r-[0.05rem] border-[#EBEAEB]  flex-col gap-8 h-screen p-8 sticky top-0'>
      <Logo />
      <ReturnSearchEngine />
    </header>
  )
}
