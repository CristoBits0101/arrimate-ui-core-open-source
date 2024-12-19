interface CardHeaderProps {
  title: string
}

export default function CardHeader({ title }: CardHeaderProps) {
  if (!title) return null

  return (
    <div className='w-full h-11 text-center flex items-center justify-center rounded-tr-3xl bg-[#ebeaeb] text-lg'>
      <h2 className='font-medium'>{title}</h2>
    </div>
  )
}
