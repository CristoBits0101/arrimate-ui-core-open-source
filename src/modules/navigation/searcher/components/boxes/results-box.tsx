'use client'

// Components
import ClearButton from '@/modules/navigation/searcher/components/buttons/clear-button'
import CloseButton from '@/modules/navigation/searcher/components/buttons/close-button'
import SearchLink from '@/modules/navigation/searcher/components/links/search-link'

// Types
interface ResultsBoxProps {
  iconSrc: string
  h2: string
  clearButton?: boolean
  closeButton?: boolean
}

export default function ResultsBox({
  iconSrc,
  h2,
  clearButton,
  closeButton
}: ResultsBoxProps) {
  return (
    <nav className='pt-2 pb-3 w-full h-full flex flex-col gap-3'>
      <div className='font-medium px-4 w-full h-fit flex justify-between items-center'>
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
