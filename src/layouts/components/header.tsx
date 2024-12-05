'use client'

// branding
import Logo from '@/modules/marketing/components/branding/branding-logo'

// navigation
import ReturnSearchEngine from '@/modules/navigation/components/rendering/rendering-search-engine'

// Layout
export default function Header() {
  return (
    <header className='hidden md:flex col-span-1 border-r-[0.05rem] border-[#EBEAEB] dark:border-[#3b3b40] flex-col gap-8 min-h-screen max-h-fit h-auto p-8 sticky top-0'>
      <Logo />
      <ReturnSearchEngine />
    </header>
  )
}
