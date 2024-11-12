import backIcon from '@/modules/configuration/assets/icons/buttons/back.svg'
import Image from 'next/image'
import LanguageSelector from '../selectors/language-selector'
import ThemeSelector from '../selectors/theme-selector'
import { useTranslations } from 'next-intl'

interface OptionButtonProps {
  component: 'language' | 'theme'
  handleBack: () => void
}

export default function OptionButton({
  component,
  handleBack
}: OptionButtonProps) {
  const t = useTranslations('SettingsPanel')

  return (
    <div className='flex flex-col items-center gap-2 py-8'>
      <div className='relative w-full h-fit'>
        <h2 className='text-center text-lg font-medium'>
          {component === 'language' ? t('language.title') : t('themes.title')}
        </h2>
        <button
          className='w-7 h-full absolute top-0 left-8 flex items-center'
          onClick={handleBack}
        >
          <Image
            width={24}
            height={24}
            src={backIcon}
            alt={t('backIconAlt', { defaultMessage: 'Back' })}
            className='aspect-square object-cover'
          />
        </button>
      </div>
      {component === 'language' ? <LanguageSelector /> : <ThemeSelector />}
    </div>
  )
}
