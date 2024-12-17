import CardWrapper from '@/modules/feeds/components/cards/card-wrapper'
import { useTranslations } from 'next-intl'

export default function ShortForm() {
  const t = useTranslations('feedForms')
  return (
    <CardWrapper headerTitle={t('story')}>
      <div className='w-full h-full flex items-center justify-center bg-[#F4F4F4] rounded-bl-3xl'>
        ShortForm
      </div>
    </CardWrapper>
  )
}
