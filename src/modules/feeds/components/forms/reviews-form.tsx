import CardWrapper from '@/modules/feeds/components/cards/card-wrapper'
import { useTranslations } from 'next-intl'

export default function ReviewsForm() {
  const t = useTranslations('FeedForms')
  return <CardWrapper headerTitle={t('reviews')}>ReviewsForm</CardWrapper>
}
