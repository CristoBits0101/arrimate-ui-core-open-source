'use client'

// Buttons
import OptionButton from '@/modules/configuration/settings-panel/buttons/option-button'

// Icons
import activityIcon from '@/modules/feeds/assets/icons/panels/activity.svg'
import analysisIcon from '@/modules/feeds/assets/icons/panels/analysis.svg'

// Hooks
import { useTranslations } from 'next-intl'

const PerformanceOptions = () => {
  // Translations
  const t = useTranslations('Posts')
  return (
    <section className='w-full h-fit flex flex-col'>
      <OptionButton
        label={t('activity')}
        isSelected={false}
        onClick={() => {}}
        iconSrc={activityIcon}
        altText={t('activity')}
      />
      <OptionButton
        label={t('analysis')}
        isSelected={false}
        onClick={() => {}}
        iconSrc={analysisIcon}
        altText={t('analysis')}
      />
    </section>
  )
}

export default PerformanceOptions
