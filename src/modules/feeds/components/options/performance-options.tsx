'use client'

import OptionButton from '@/modules/configuration/components/buttons/option-button'
import icon from '@/modules/feeds/assets/icons/links/black/home.svg'
import { useTranslations } from 'next-intl'

const PerformanceOptions = () => {
  const t = useTranslations('Performance')

  return (
    <section className='w-full h-fit flex flex-col'>
      <OptionButton
        label={t('activity')}
        isSelected={false}
        onClick={() => {}}
        iconSrc={icon}
        altText={t('activity')}
      />
      <OptionButton
        label={t('analysis')}
        isSelected={false}
        onClick={() => {}}
        iconSrc={icon}
        altText={t('analysis')}
      />
    </section>
  )
}

export default PerformanceOptions
