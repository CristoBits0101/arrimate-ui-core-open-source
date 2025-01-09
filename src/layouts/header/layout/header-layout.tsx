'use client'

// Branding
import Logo from '@/modules/marketing/components/branding/branding-logo'

// Navigation
import ReturnSearchEngine from '@/layouts/header/panels/components/navigation-panel'

// Layout
export default function Header() {
  return (
    <header className='hidden md:flex col-span-1 border-r-[0.05rem] border-[#EBEAEB] dark:border-[#3b3b40] flex-col gap-8 min-h-screen max-h-fit h-auto py-8 sticky top-0 max-w-80'>
      <Logo />
      <ReturnSearchEngine />
    </header>
  )
}
