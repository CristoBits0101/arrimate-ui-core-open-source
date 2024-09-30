import { cn } from '@/lib/utils'
import { ds } from '@/lib/fonts'

interface HeaderProps {
  label: string
}

export default function Header({ label }: HeaderProps) {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn('text-3xl font-semibold', ds.className)}>🔐 Arrimate</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  )
}
