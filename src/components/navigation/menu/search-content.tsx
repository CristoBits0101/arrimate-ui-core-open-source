'use client'

import close from '@/assets/icons/searcher/close.svg'
import search from '@/assets/icons/searcher/search.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

type SetIsFocused = React.Dispatch<React.SetStateAction<boolean>>

interface SearchContentProps {
  searchTerm: string
  locale: string
  setIsFocused: SetIsFocused
}

export default function SearchContent({
  setIsFocused,
  searchTerm,
  locale
}: SearchContentProps) {
  const t = useTranslations('Searcher')
  const handleFocus = () => {
    setIsFocused(false)
  }
  return (
    <nav className='rounded-3xl mt-2 p-4 text-sm border-[0.094rem] border-solid border-[#bfbdc050] shadow-sm shadow-[#F4F4F4] w-full h-fit flex flex-col gap-2'>
      <div className='font-medium mb-2 w-full h-fit flex justify-between items-center'>
        <h2>{t('recommended')}</h2>
        <button onClick={handleFocus}>
          <Image className='w-5' src={close} alt='Close' />
        </button>
      </div>
      <ul className='flex flex-col gap-2 w-full h-fit'>
        {Array.from({ length: 9 }).map((_, index) => (
          <li className='truncate' key={index}>
            <Link
              href={`/${locale}/search?q=${encodeURIComponent(searchTerm)}`}
              className='truncate flex gap-2 items-center'
            >
              <Image className='w-5' src={search} alt='Search' /> Resultado{' '}
              {index + 1}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
