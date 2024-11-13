'use client'

import Image from 'next/image'
import backIcon from '@/modules/configuration/assets/icons/buttons/navigation/back.svg'
import { useTranslations } from 'next-intl'

interface BackButtonProps {
  onClick: () => void
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  const t = useTranslations('SettingsPanel')

  return (
    <button
      className='w-7 h-full absolute top-0 left-8 flex items-center'
      onClick={onClick}
    >
      <Image
        width={24}
        height={24}
        src={backIcon}
        alt={t('backIconAlt', { defaultMessage: 'Back' })}
        className='aspect-square object-cover'
      />
    </button>
  )
}

export default BackButton
