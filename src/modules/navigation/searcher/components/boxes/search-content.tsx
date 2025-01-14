'use client'

// Components
import SearchLink from '@/modules/navigation/searcher/components/links/search-link'

// Hooks
import useSearch from '@/modules/navigation/searcher/hooks/useSearch'

// Icons
import clearIcon from '@/assets/icons/buttons/inactive/light-theme/windows/clear-light-icon.svg'
import closeIcon from '@/assets/icons/buttons/inactive/light-theme/windows/close-light-icon.svg'

// Images
import Image from 'next/image'

// Types
interface SearchContentProps {
  iconSrc: string
  h2: string
  closeButton: boolean
}

export default function SearchContent({ iconSrc, h2 }: SearchContentProps) {
  // Decomposition
  const { updateReset, updateFocus } = useSearch()

  return (
    <nav className='rounded-3xl mt-2 pt-4 pb-3 border-[0.05rem] border-solid border-[#EBEAEB] shadow-sm w-full h-fit flex flex-col gap-3'>
      <div className='font-medium pr-4 pl-4 w-full h-fit flex justify-between items-center'>
        <h2>{h2}</h2>
        <div className='w-fit h-full flex gap-2 items-center justify-center'>
          <button
            onClick={() => {
              updateReset(true)
            }}
          >
            <Image className='w-4' src={clearIcon} alt='Close' />
          </button>
          <button
            onClick={() => {
              updateFocus(false)
            }}
          >
            <Image className='w-4' src={closeIcon} alt='Close' />
          </button>
        </div>
      </div>
      <ul className='flex flex-col w-full h-fit'>
        <SearchLink iconSrc={iconSrc} />
      </ul>
    </nav>
  )
}
