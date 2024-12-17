import CardWrapper from '@/modules/feeds/components/cards/card-wrapper'
import { useTranslations } from 'next-intl'

export default function VideoForm() {
  const t = useTranslations('feedForms')
  return <CardWrapper headerTitle={t('videos')}>VideoForm</CardWrapper>
}
