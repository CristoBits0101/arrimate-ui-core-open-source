'use client'

// Custom
import { usePost } from '@/modules/publications/add-post/hooks/usePost'

// Forms
import AudioForm from '@/modules/publications/add-post/components/forms/audio-form'
import EventForm from '@/modules/publications/add-post/components/forms/event-form'
import ProductForm from '@/modules/publications/add-post/components/forms/product-form'
import ShortForm from '@/modules/publications/add-post/components/forms/short-form'
import StoryForm from '@/modules/publications/add-post/components/forms/story-form'
import StreamForm from '@/modules/publications/add-post/components/forms/stream-form'
import VideoForm from '@/modules/publications/add-post/components/forms/video-form'

export default function PublishCard() {
  const { activePost } = usePost()
  // Return forms
  return (
    <div className='w-full h-full flex justify-center items-center'>
      {(() => {
        switch (activePost) {
          case 'audio':
            return <AudioForm />
          case 'event':
            return <EventForm />
          case 'product':
            return <ProductForm />
          case 'short':
            return <ShortForm />
          case 'story':
            return <StoryForm />
          case 'stream':
            return <StreamForm />
          case 'video':
            return <VideoForm />
          default:
            return <div>POST PAGE</div>
        }
      })()}
    </div>
  )
}
