'use client'

import OptionButton from '@/modules/configuration/components/buttons/option-button'
import storyWhiteSVG from '@/modules/feeds/assets/icons/links/white/stories.svg'
import eventsWhiteSVG from '@/modules/feeds/assets/icons/links/white/events.svg'
import productsWhiteSVG from '@/modules/e-commerce/assets/icons/white/products.svg'
import shortsWhiteSVG from '@/modules/streaming/assets/white/shorts.svg'
import videosWhiteSVG from '@/modules/streaming/assets/white/videos.svg'
import AudioWhiteSVG from '@/modules/streaming/assets/white/audio.svg'
import { usePost } from '@/modules/feeds/hooks/panels/usePost'
import { useTranslations } from 'next-intl'

const PublishOptions = () => {
  const { changePost } = usePost()
  const t = useTranslations('Posts')

  return (
    <section className='w-full h-fit flex flex-col'>
      <OptionButton
        label={t('story')}
        isSelected={false}
        onClick={() => changePost('story')}
        iconSrc={storyWhiteSVG}
        altText={t('story')}
      />
      <OptionButton
        label={t('event')}
        isSelected={false}
        onClick={() => changePost('event')}
        iconSrc={eventsWhiteSVG}
        altText={t('event')}
      />
      <OptionButton
        label={t('product')}
        isSelected={false}
        onClick={() => changePost('product')}
        iconSrc={productsWhiteSVG}
        altText={t('product')}
      />
      <OptionButton
        label={t('short')}
        isSelected={false}
        onClick={() => changePost('short')}
        iconSrc={shortsWhiteSVG}
        altText={t('short')}
      />
      <OptionButton
        label={t('video')}
        isSelected={false}
        onClick={() => changePost('video')}
        iconSrc={videosWhiteSVG}
        altText={t('video')}
      />
      <OptionButton
        label={t('audio')}
        isSelected={false}
        onClick={() => changePost('audio')}
        iconSrc={AudioWhiteSVG}
        altText={t('audio')}
      />
    </section>
  )
}

export default PublishOptions
