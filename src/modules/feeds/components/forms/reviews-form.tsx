import CardWrapper from '@/modules/feeds/components/cards/card-wrapper'
import { useTranslations } from 'next-intl'

export default function ReviewsForm() {
  const t = useTranslations('feedForms')
  return <CardWrapper headerTitle={t('reviews')}>ReviewsForm</CardWrapper>
}
