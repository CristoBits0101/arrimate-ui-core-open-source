// Context
import { useSearchContext } from '@/modules/navigation/searcher/hooks/useSearchContext'

// Images
import Image from 'next/image'
import logo from '@/assets/icons/logo/arrimate.svg'

// Fonts
import { ds } from '@/lib/google/google-fonts'

export default function Logo() {
  // Context
  const { isFocused } = useSearchContext()

  return (
    <div className='relative text-4xl font-medium flex justify-center items-center w-full h-11 dark:text-[#ececed] aspect-square'>
      {!isFocused ? (
        <h1 className={ds.className}>Arrímate</h1>
      ) : (
        <Image
          src={logo}
          alt='Arrímate logo'
          width={44}
          height={44}
          quality={100}
          className='aspect-square object-contain'
        />
      )}
    </div>
  )
}
