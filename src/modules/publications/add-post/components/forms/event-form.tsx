import CardWrapper from '@/modules/publications/add-post/components/cards/card-wrapper'
import { useTranslations } from 'next-intl'

export default function EventForm() {
  const t = useTranslations('FeedForms')
  return <CardWrapper headerTitle={t('events')}>EventForm</CardWrapper>
}
