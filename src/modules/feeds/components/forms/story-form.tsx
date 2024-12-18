'use client'

import CardWrapper from '@/modules/feeds/components/cards/card-wrapper'
import { useTranslations } from 'next-intl'

export default function StoryForm() {
  const t = useTranslations('feedForms')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // handle form submission
  }

  return (
    <CardWrapper headerTitle={t('stories')}>
      <form
        method='post'
        encType='multipart/form-data'
        onSubmit={onSubmit}
      >
        <input
          type='file'
          onChange={(e) => {
            console.log(e.target.files)
          }}
          className=''
        />
      </form>
    </CardWrapper>
  )
}
