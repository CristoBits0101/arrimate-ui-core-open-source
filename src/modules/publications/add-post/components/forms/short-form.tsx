import CardWrapper from '@/modules/publications/add-post/components/cards/card-wrapper'
import { useTranslations } from 'next-intl'

export default function ShortForm() {
  const t = useTranslations('FeedForms')
  return <CardWrapper headerTitle={t('shorts')}>ShortForm</CardWrapper>
}
