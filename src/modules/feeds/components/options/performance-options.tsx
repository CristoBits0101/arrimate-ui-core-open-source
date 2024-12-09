'use client'

import icon from '@/modules/feeds/assets/icons/links/white/home.svg'
import OptionButton from '@/modules/configuration/components/buttons/option-button'

const PerformanceOptions = () => {
  return (
    <section className='w-full h-fit flex flex-col'>
      <OptionButton
        label='Actividad'
        isSelected={false}
        onClick={() => {}}
        iconSrc={icon}
        altText='Actividad icon'
      />
      <OptionButton
        label='Análisis'
        isSelected={false}
        onClick={() => {}}
        iconSrc={icon}
        altText='Análisis icon'
      />
    </section>
  )
}

export default PerformanceOptions
