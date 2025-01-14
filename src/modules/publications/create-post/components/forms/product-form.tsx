// Components
import CardWrapper from '@/modules/publications/create-post/components/cards/card-wrapper'

// Intl
import { useTranslations } from 'next-intl'

export default function ProductForm() {
  const t = useTranslations('FeedForms')
  return <CardWrapper headerTitle={t('products')}>ProductForm</CardWrapper>
}
