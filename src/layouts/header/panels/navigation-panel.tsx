'use-client'

// Components
import Navbar from '@/modules/navigation/menu/components/navbar-menu/navbar-menu'
import ReturnSearchContent from '@/modules/navigation/searcher/components/panels/search-panel'
import Searcher from '@/modules/navigation/searcher/components/forms/search-form'

// Hooks
import useSearch from '@/modules/navigation/searcher/hooks/useSearch'

export default function NavigationPanel() {
  // Decomposition
  const { searchContainerRef, isFocused, searchTerm } = useSearch()
  console.log(isFocused)
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
