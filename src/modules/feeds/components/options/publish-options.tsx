'use client'

import icon from '@/modules/feeds/assets/icons/links/white/home.svg'
import OptionButton from '@/modules/configuration/components/buttons/option-button'

const PublishOptions = () => {
  return (
    <section className='w-full h-fit flex flex-col'>
      <OptionButton
        label='Historia'
        isSelected={false}
        onClick={() => {}}
        iconSrc={icon}
        altText='Historia icon'
      />
      <OptionButton
        label='Imagen'
        isSelected={false}
        onClick={() => {}}
        iconSrc={icon}
        altText='Imagen icon'
      />
      <OptionButton
        label='Evento'
        isSelected={false}
        onClick={() => {}}
        iconSrc={icon}
        altText='Evento icon'
      />
      <OptionButton
        label='Producto'
        isSelected={false}
        onClick={() => {}}
        iconSrc={icon}
        altText='Producto icon'
      />
      <OptionButton
        label='Corto'
        isSelected={false}
        onClick={() => {}}
        iconSrc={icon}
        altText='Corto icon'
      />
      <OptionButton
        label='Video'
        isSelected={false}
        onClick={() => {}}
        iconSrc={icon}
        altText='Video icon'
      />
      <OptionButton
        label='Reseña'
        isSelected={false}
        onClick={() => {}}
        iconSrc={icon}
        altText='Reseña icon'
      />
    </section>
  )
}

export default PublishOptions
