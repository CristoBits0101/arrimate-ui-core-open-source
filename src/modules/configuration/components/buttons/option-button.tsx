import Back from '@/modules/configuration/assets/icons/buttons/back.svg'
import Image from 'next/image'
import LanguageSelector from '../selectors/language-selector'
import ThemeSelector from '../selectors/theme-selector'

interface OptionButtonProps {
  component: 'language' | 'theme'
  handleBack: () => void
}

export default function OptionButton({
  component,
  handleBack
}: OptionButtonProps) {
  return (
    <div className='flex flex-col items-center gap-4 py-8'>
      <div className='relative w-full h-fit'>
        <h2 className='text-center text-lg font-medium'>
          {component === 'language' ? 'Language' : 'Theme'}
        </h2>
        <button
          className='w-7 h-7 absolute top-0 left-8 flex items-center border-[0.05rem] border-[#EBEAEB] hover:bg-[#EBEAEB] border-solid rounded-full bg-[#F4F4F4]'
          onClick={handleBack}
        >
          <Image width={24} height={24} src={Back} alt='Back' className='ml-[0.05rem] aspect-square object-cover' />
        </button>
      </div>
      {component === 'language' ? (
        <LanguageSelector />
      ) : component === 'theme' ? (
        <ThemeSelector />
      ) : null}
    </div>
  )
}
