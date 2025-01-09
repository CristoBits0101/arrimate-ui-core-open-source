'use client'

// Buttons
import OptionButton from '@/modules/configuration/settings-panel/buttons/option-button'

// Icons
import chatWhiteSVG from '@/assets/icons/navigation/inactive/light-theme/chats-light-icon.svg'
import eventsWhiteSVG from '@/assets/icons/navigation/inactive/light-theme/events-light-icon.svg'
import liveWhiteSVG from '@/assets/icons/navigation/inactive/light-theme/live-light-icon.svg'
import productsWhiteSVG from '@/assets/icons/navigation/inactive/light-theme/products-light-icon.svg'
import shortsWhiteSVG from '@/assets/icons/navigation/inactive/light-theme/shorts-light-icon.svg'
import storyWhiteSVG from '@/assets/icons/navigation/inactive/light-theme/stories-light-icon.svg'
import videosWhiteSVG from '@/assets/icons/navigation/inactive/light-theme/videos-light-icon.svg'

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
