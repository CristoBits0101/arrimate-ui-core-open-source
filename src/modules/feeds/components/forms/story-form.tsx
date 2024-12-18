'use client'

import CardWrapper from '@/modules/feeds/components/cards/card-wrapper'
import { useTranslations } from 'next-intl'

export default function StoryForm() {
  const t = useTranslations('feedForms')
  return (
    <CardWrapper headerTitle={t('stories')}>
      <input
        type='file'
        onChange={(e) => {
          console.log(e.target.files)
        }}
        className=''
      />
    </CardWrapper>
  )
}
