'use client'

// Components
import CardWrapper from '@/modules/feeds/components/cards/card-wrapper'

// next-intl
import { useTranslations } from 'next-intl'

// Hooks
import { useState } from 'react'

export default function StoryForm() {
  // State for uploaded file
  const [file, setFile] = useState<File | null>(null)
  // Translations
  const t = useTranslations('feedForms')
  // Submit logic
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent default form submission
    e.preventDefault()
    // Create new instance of FormData
    const formData = new FormData(e.currentTarget)
    // Add file to form data
    formData.append('file', file as Blob)
    // Send form data to server
    const response = await fetch('/api/stories', {
      method: 'POST',
      body: formData
    })
    // Get the response data from server
    const data = await response.json()
    if (data) console.log(data)
  }
  // Return component
  return (
    <CardWrapper headerTitle={t('stories')}>
      <form
        encType='multipart/form-data'
        onSubmit={onSubmit}
        className='flex flex-col gap-4'
      >
        <h3></h3>
        <input
          type='file'
          name='file'
          onChange={(e) => {
            // Get the file from the input
            const file = e.target.files?.[0]
            // Set the file in state
            if (file) setFile(file)
          }}
          accept='image/*'
        />
        <button type='submit'>Submit</button>
      </form>
    </CardWrapper>
  )
}
