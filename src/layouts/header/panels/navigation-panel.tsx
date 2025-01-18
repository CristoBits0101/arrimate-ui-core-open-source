'use client'

// Components
import Navbar from '@/modules/navigation/menu/components/navbar-menu/navbar-menu'
import SearcherForm from '@/modules/navigation/searcher/components/forms/search-form'

// Context
import { useSearchContext } from '@/modules/navigation/searcher/hooks/useSearchContext'

export default function NavigationPanel() {
  // Context
  const { searchContainerRef, isFocused } = useSearchContext()

  return !isFocused ? (
    <div className='flex flex-col h-fit w-full' ref={searchContainerRef}>
      <SearcherForm />
      <Navbar />
    </div>
  ) : (
    <div
      className='flex flex-col w-fit h-fit w- px-2 border-r-[0.05rem] border-[#EBEAEB] dark:border-[#3b3b40]'
      ref={searchContainerRef}
    >
      <Navbar />
    </div>
  )
}
