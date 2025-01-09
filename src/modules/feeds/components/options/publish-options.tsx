'use client'

// Buttons
import OptionButton from '@/modules/configuration/settings-panel/buttons/option-button'

// Custom
import { usePost } from '@/modules/publications/create-post/hooks/usePost'

// Icons
import audioWhiteSVG from '@/modules/streaming/assets/white/audio-light.svg'
import eventsWhiteSVG from '@/modules/feeds/assets/icons/links/white/events-light.svg'
import productsWhiteSVG from '@/modules/e-commerce/assets/icons/white/products-light.svg'
import reviewsWhiteSVG from '@/modules/feeds/assets/icons/links/white/reviews-light.svg'
import shortsWhiteSVG from '@/modules/streaming/assets/white/shorts-light.svg'
import storyWhiteSVG from '@/modules/feeds/assets/icons/links/white/stories-light.svg'
import videosWhiteSVG from '@/modules/streaming/assets/white/videos-light.svg'

// Intl
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
        iconSrc={audioWhiteSVG}
        altText={t('audio')}
      />
      <OptionButton
        label={t('review')}
        isSelected={false}
        onClick={() => changePost('review')}
        iconSrc={reviewsWhiteSVG}
        altText={t('review')}
      />
    </section>
  )
}

export default PublishOptions
