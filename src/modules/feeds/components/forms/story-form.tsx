'use client'

import CardWrapper from '@/modules/feeds/components/cards/card-wrapper'
import { useTranslations } from 'next-intl'

export default function StoryForm() {
  // Translations
  const t = useTranslations('feedForms')
  // Submit logic
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: new FormData(e.currentTarget)
    })
    const data = await response.json()
    console.log(data)
  }
  // Return component
  return (
    <CardWrapper headerTitle={t('stories')}>
      <form encType='multipart/form-data' onSubmit={onSubmit}>
        <input
          type='file'
          name='file'
          onChange={(e) => {
            console.log(e.target.files)
          }}
          accept='image/*'
        />
        <button type='submit'>Submit</button>
      </form>
    </CardWrapper>
  )
}
