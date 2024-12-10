'use client'

import OptionButton from '@/modules/configuration/components/buttons/option-button'
import storyWhiteSVG from '@/modules/feeds/assets/icons/panels/story.svg'
import imageWhiteSVG from '@/modules/feeds/assets/icons/panels/image.svg'
import eventsWhiteSVG from '@/modules/feeds/assets/icons/links/white/events.svg'
import productsWhiteSVG from '@/modules/e-commerce/assets/white/products.svg'
import shortsWhiteSVG from '@/modules/streaming/assets/white/shorts.svg'
import videosWhiteSVG from '@/modules/streaming/assets/white/videos.svg'
import { useTranslations } from 'next-intl'

const PublishOptions = () => {
  const t = useTranslations('Posts')
  return (
    <section className='w-full h-fit flex flex-col'>
      <OptionButton
        label={t('story')}
        isSelected={false}
        onClick={() => {}}
        iconSrc={storyWhiteSVG}
        altText={t('story')}
      />
      <OptionButton
        label={t('image')}
        isSelected={false}
        onClick={() => {}}
        iconSrc={imageWhiteSVG}
        altText={t('image')}
      />
      <OptionButton
        label={t('event')}
        isSelected={false}
        onClick={() => {}}
        iconSrc={eventsWhiteSVG}
        altText={t('event')}
      />
      <OptionButton
        label={t('product')}
        isSelected={false}
        onClick={() => {}}
        iconSrc={productsWhiteSVG}
        altText={t('product')}
      />
      <OptionButton
        label={t('short')}
        isSelected={false}
        onClick={() => {}}
        iconSrc={shortsWhiteSVG}
        altText={t('short')}
      />
      <OptionButton
        label={t('video')}
        isSelected={false}
        onClick={() => {}}
        iconSrc={videosWhiteSVG}
        altText={t('video')}
      />
    </section>
  )
}

export default PublishOptions
