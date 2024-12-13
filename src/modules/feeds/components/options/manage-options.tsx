'use client'

import OptionButton from '@/modules/configuration/components/buttons/option-button'
import storyWhiteSVG from '@/modules/feeds/assets/icons/links/white/stories.svg'
import eventsWhiteSVG from '@/modules/feeds/assets/icons/links/white/events.svg'
import productsWhiteSVG from '@/modules/e-commerce/assets/white/products.svg'
import shortsWhiteSVG from '@/modules/streaming/assets/white/shorts.svg'
import videosWhiteSVG from '@/modules/streaming/assets/white/videos.svg'
import icon from '@/modules/feeds/assets/icons/links/black/stories.svg'
import { useTranslations } from 'next-intl'

const ManageOptions = () => {
  const t = useTranslations('Posts')
  return (
    <section className='w-full h-fit flex flex-col'>
      <OptionButton
        label={t('stories')}
        isSelected={false}
        onClick={() => {}}
        iconSrc={storyWhiteSVG}
        altText={t('stories')}
      />
      <OptionButton
        label={t('events')}
        isSelected={false}
        onClick={() => {}}
        iconSrc={eventsWhiteSVG}
        altText={t('events')}
      />
      <OptionButton
        label={t('products')}
        isSelected={false}
        onClick={() => {}}
        iconSrc={productsWhiteSVG}
        altText={t('products')}
      />
      <OptionButton
        label={t('shorts')}
        isSelected={false}
        onClick={() => {}}
        iconSrc={shortsWhiteSVG}
        altText={t('shorts')}
      />
      <OptionButton
        label={t('videos')}
        isSelected={false}
        onClick={() => {}}
        iconSrc={videosWhiteSVG}
        altText={t('videos')}
      />
      <OptionButton
        label={t('comments')}
        isSelected={false}
        onClick={() => {}}
        iconSrc={icon}
        altText={t('comments')}
      />
      <OptionButton
        label={t('tags')}
        isSelected={false}
        onClick={() => {}}
        iconSrc={icon}
        altText={t('tags')}
      />
    </section>
  )
}

export default ManageOptions
