'use client'

import OptionButton from '@/modules/configuration/components/buttons/option-button'
import icon from '@/modules/feeds/assets/icons/links/black/home.svg'
import { useTranslations } from 'next-intl'

const ManageOptions = () => {
  const t = useTranslations('Publish')

  return (
    <section className='w-full h-fit flex flex-col'>
      <OptionButton
        label={t('story')}
        isSelected={false}
        onClick={() => {}}
        iconSrc={icon}
        altText={t('story')}
      />
      <OptionButton
        label={t('image')}
        isSelected={false}
        onClick={() => {}}
        iconSrc={icon}
        altText={t('image')}
      />
      <OptionButton
        label={t('event')}
        isSelected={false}
        onClick={() => {}}
        iconSrc={icon}
        altText={t('event')}
      />
      <OptionButton
        label={t('product')}
        isSelected={false}
        onClick={() => {}}
        iconSrc={icon}
        altText={t('product')}
      />
      <OptionButton
        label={t('comments')} // Nueva clave
        isSelected={false}
        onClick={() => {}}
        iconSrc={icon}
        altText={t('comments')}
      />
      <OptionButton
        label={t('tags')} // Nueva clave
        isSelected={false}
        onClick={() => {}}
        iconSrc={icon}
        altText={t('tags')}
      />
    </section>
  )
}

export default ManageOptions
