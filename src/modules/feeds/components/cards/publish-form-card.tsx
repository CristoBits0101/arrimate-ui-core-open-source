// Custom hook
import { usePostForm } from '@/modules/feeds/hooks/panels/usePostForm'

// Change the form to be rendered on the post page
export default function PublishFormCard() {
  const { activePostForm } = usePostForm()
  return (
    <div>
      {(() => {
        switch (activePostForm) {
          case 'stream':
            return (
              <div>
                <h1>Formulario de Stream</h1>
              </div>
            )
          default:
            return null
        }
      })()}
    </div>
  )
}
