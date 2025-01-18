'use client'

// Components
import Navbar from '@/modules/navigation/menu/components/navbar-menu/navbar-menu'
import SearchContent from '@/modules/navigation/searcher/components/panels/search-content'
import SearcherForm from '@/modules/navigation/searcher/components/forms/search-form'

// Context
import { useSearchContext } from '@/modules/navigation/searcher/hooks/useSearchContext'

export default function NavigationPanel() {
  // Context
  const { searchContainerRef, isFocused } = useSearchContext()

  return (
    <div className='flex flex-col h-fit w-full' ref={searchContainerRef}>
      <SearcherForm />
      {!isFocused ? (
        <Navbar />
      ) : (
        <div className='w-full h-fit bg-red-200 px-8 flex'>
          <Navbar />
          <SearchContent />
        </div>
      )}
    </div>
  )
}
