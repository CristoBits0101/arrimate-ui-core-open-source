'use client'

import clear from '@/assets/icons/searcher/clear.svg'
import close from '@/assets/icons/searcher/close.svg'
import Image from 'next/image'
import searchIcon from '@/assets/icons/searcher/search.svg'
import SearchLink from '@/components/navigation/links/search-link'
import { useTranslations } from 'next-intl'

type SetIsFocused = React.Dispatch<React.SetStateAction<boolean>>
type SetResetSearchInput = React.Dispatch<React.SetStateAction<boolean>>

interface SearchContentProps {
  setResetSearchInput: SetResetSearchInput
  setIsFocused: SetIsFocused
  searchTerm: string
  locale: string
}

export default function RecommendedMenu({
  setResetSearchInput,
  setIsFocused
}: // searchTerm,
// locale
SearchContentProps) {
  const t = useTranslations('Searcher')
  const handleFocus = () => {
    setIsFocused(false)
  }
  const handleClearSearch = () => {
    setResetSearchInput(true)
  }
  return (
    <nav className='rounded-3xl mt-2 pt-4 pb-3 text-sm border-[0.05rem] border-solid border-[#bfbdc050] shadow shadow-[#edeced] w-full h-fit flex flex-col gap-3'>
      <div className='font-medium pr-4 pl-4 w-full h-fit flex justify-between items-center'>
        <h2>{t('recommended')}</h2>
        <div className='w-fit h-full flex gap-2 items-center justify-center'>
          <button onClick={handleClearSearch}>
            <Image className='w-4' src={clear} alt='Close' />
          </button>
          <button onClick={handleFocus}>
            <Image className='w-4' src={close} alt='Close' />
          </button>
        </div>
      </div>
      <ul className='flex flex-col w-full h-fit'>
        <SearchLink iconSrc={searchIcon} />
      </ul>
    </nav>
  )
}
