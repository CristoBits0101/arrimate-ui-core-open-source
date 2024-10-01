import { cn } from '@/lib/utils'
import { ds } from '@/lib/fonts'

export default function Header() {
  return (
    <div className="w-full flex flex-col gap-y-3 items-center justify-center">
      <h1 className={cn('text-5xl', ds.className)}>
        Arrimate
      </h1>
    </div>
  )
}
