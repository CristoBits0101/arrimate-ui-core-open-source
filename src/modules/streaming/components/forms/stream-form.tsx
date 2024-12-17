import CardWrapper from '@/modules/feeds/components/cards/card-wrapper'
import { useTranslations } from 'next-intl'

export default function StreamForm() {
  const t = useTranslations('feedForms')
  return <CardWrapper headerTitle={t('story')}>StreamForm</CardWrapper>
}
