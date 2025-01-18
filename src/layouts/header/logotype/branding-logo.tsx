// Context
import { useSearchContext } from '@/modules/navigation/searcher/hooks/useSearchContext'

// Images
import Image from 'next/image'

// Fonts
import { ds } from '@/lib/google/google-fonts'

export default function Logo() {
  // Context
  const { isFocused } = useSearchContext()

  return (
    <div className='relative text-4xl font-medium flex justify-center items-center w-full h-[2.5rem] dark:text-[#ececed]'>
      {!isFocused ? (
        <h1 className={ds.className}>Arrímate</h1>
      ) : (
        <Image
          src='/ico/arrimate.ico'
          alt='Arrímate logo'
          fill
          className='w-7 h-7 aspect-square object-contain'
        />
      )}
    </div>
  )
}
