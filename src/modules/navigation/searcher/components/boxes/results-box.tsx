'use client'

// Components
import ClearButton from '@/modules/navigation/searcher/components/buttons/clear-button'
import CloseButton from '@/modules/navigation/searcher/components/buttons/close-button'
import SearchLink from '@/modules/navigation/searcher/components/links/search-link'

// Types
interface SearchContentProps {
  iconSrc: string
  h2: string
  clearButton?: boolean
  closeButton?: boolean
}

export default function SearchContent({
  iconSrc,
  h2,
  clearButton,
  closeButton
}: SearchContentProps) {
  return (
    <nav className='rounded-3xl mt-2 pt-4 pb-3 border-[0.05rem] border-solid border-[#EBEAEB] dark:border-[#3b3b40] shadow-sm w-full h-fit flex flex-col gap-3'>
      <div className='font-medium pr-4 pl-4 w-full h-fit flex justify-between items-center'>
        <h2>{h2}</h2>
        <div className='w-fit h-full flex gap-2 items-center justify-center'>
          {clearButton && <ClearButton />}
          {closeButton && <CloseButton />}
        </div>
      </div>
      <ul className='flex flex-col w-full h-fit'>
        <SearchLink iconSrc={iconSrc} />
      </ul>
    </nav>
  )
}
