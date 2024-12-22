import CardWrapper from '@/modules/feeds/components/cards/card-wrapper'
import { useTranslations } from 'next-intl'

export default function AudioForm() {
  const t = useTranslations('FeedForms')
  return <CardWrapper headerTitle={t('audios')}>AudioForm</CardWrapper>
}
