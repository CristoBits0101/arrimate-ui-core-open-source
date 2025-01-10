'use client'

// Buttons
import OptionButton from '@/modules/configuration/settings-panel/buttons/option-button'

// Icons
import activityIcon from '@/assets/icons/panels/activity-icon.svg'
import analysisIcon from '@/assets/icons/panels/analysis-icon.svg'

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
