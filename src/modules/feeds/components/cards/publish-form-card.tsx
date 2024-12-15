'use client'

// Custom hook
import { usePostForm } from '@/modules/feeds/hooks/panels/usePostForm'

// Post Forms
import AudioForm from '@/modules/feeds/components/forms/audio-form'
import EventForm from '@/modules/feeds/components/forms/event-form'
import ProductForm from '@/modules/feeds/components/forms/product-form'
import ShortForm from '@/modules/feeds/components/forms/short-form'
import StoryForm from '@/modules/feeds/components/forms/story-form'
import StreamForm from '@/modules/feeds/components/forms/stream-form'
import VideoForm from '@/modules/feeds/components/forms/video-form'

export default function PublishFormCard() {
  const { activePostForm } = usePostForm()
  // Return forms
  return (
    <div>
      {(() => {
        switch (activePostForm) {
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
