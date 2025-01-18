'use client'

// Components
import LoupeButton from '@/modules/navigation/searcher/components/buttons/loupe-button'
import Navbar from '@/modules/navigation/menu/components/navbar-menu/navbar-menu'
import SearcherForm from '@/modules/navigation/searcher/components/forms/search-form'

// Context
import { useSearchContext } from '@/modules/navigation/searcher/hooks/useSearchContext'

export default function NavigationPanel() {
  // Context
  const { searchContainerRef, isFocused } = useSearchContext()

  return !isFocused ? (
    <div className='flex flex-col w-full h-fit' ref={searchContainerRef}>
      <SearcherForm />
      <Navbar />
    </div>
  ) : (
    <div
      className='flex flex-col w-fit h-fit'
      ref={searchContainerRef}
    >
      <LoupeButton />
      <Navbar />
    </div>
  )
}
