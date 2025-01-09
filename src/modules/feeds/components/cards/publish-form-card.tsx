'use client'

// Custom hook
import { usePost } from '@/modules/feeds/hooks/panels/usePost'

// Post Forms
import AudioForm from '@/modules/streaming/components/forms/audio-form'
import EventForm from '@/modules/feeds/components/forms/event-form'
import ProductForm from '@/modules/e-commerce/show-products/components/forms/product-form'
import ShortForm from '@/modules/streaming/components/forms/short-form'
import StoryForm from '@/modules/feeds/components/forms/story-form'
import StreamForm from '@/modules/streaming/components/forms/stream-form'
import VideoForm from '@/modules/streaming/components/forms/video-form'

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
            return <div>Post Page</div>
        }
      })()}
    </div>
  )
}
