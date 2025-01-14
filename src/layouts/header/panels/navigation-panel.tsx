'use-client'

// Components
import Navbar from '@/modules/navigation/menu/components/navbar-menu/navbar-menu'
import ReturnSearchContent from '@/layouts/header/panels/search-panel'
import Searcher from '@/modules/navigation/searcher/components/forms/search-form'

// Custom
import useSearch from '@/modules/navigation/searcher/hooks/useSearch'

export default function NavigationPanel() {
  // Decomposition
  const { searchContainerRef, isFocused, searchTerm } = useSearch()
  return (
    <div className='flex flex-col h-fit w-full' ref={searchContainerRef}>
      <Searcher />
      {isFocused ? (
        searchTerm ? (
          <ReturnSearchContent />
        ) : (
          <ReturnSearchContent />
        )
      ) : (
        <Navbar />
      )}
    </div>
  )
}
