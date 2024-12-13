'use client'

import { usePostForm } from '@/modules/feeds/hooks/panels/usePostForm'

export default function PublishFormCard() {
  const { selectedForm } = usePostForm()
  return selectedForm === 'stream' ? <div>Hola</div> : ''
}
