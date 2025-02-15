// Fonts
import { ds } from '@/lib/google/google-fonts'

// Utils
import { cn } from '@/lib/utils/classnames'

export default function CardHeader() {
  return (
    <div className='w-full flex flex-col gap-y-3 items-center justify-center'>
      <h1 className={cn('text-5xl dark:text-[#ececed]', ds.className)}>
        Arrímate
      </h1>
    </div>
  )
}
