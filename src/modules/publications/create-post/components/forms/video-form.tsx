import CardWrapper from '@/modules/publications/create-post/components/cards/card-wrapper'
import { useTranslations } from 'next-intl'

export default function VideoForm() {
  const t = useTranslations('FeedForms')
  return <CardWrapper headerTitle={t('videos')}>VideoForm</CardWrapper>
}
