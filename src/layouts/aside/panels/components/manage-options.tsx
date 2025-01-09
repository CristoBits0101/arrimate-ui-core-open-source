'use client'

// Buttons
import OptionButton from '@/modules/configuration/settings-panel/buttons/option-button'

// Icons
import chatWhiteSVG from '@/modules/messages/assets/white/chats-light.svg'
import eventsWhiteSVG from '@/modules/feeds/assets/icons/links/white/events-light.svg'
import liveWhiteSVG from '@/modules/streaming/assets/white/live-light.svg'
import productsWhiteSVG from '@/modules/e-commerce/assets/icons/white/products-light.svg'
import shortsWhiteSVG from '@/modules/streaming/assets/white/shorts-light.svg'
import storyWhiteSVG from '@/modules/feeds/assets/icons/links/white/stories-light.svg'
import videosWhiteSVG from '@/modules/streaming/assets/white/videos-light.svg'

// Intl
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
        label={t('live')}
        isSelected={false}
        onClick={() => {}}
        iconSrc={liveWhiteSVG}
        altText={t('live')}
      />
      <OptionButton
        label={t('comments')}
        isSelected={false}
        onClick={() => {}}
        iconSrc={chatWhiteSVG}
        altText={t('comments')}
      />
    </section>
  )
}

export default ManageOptions
