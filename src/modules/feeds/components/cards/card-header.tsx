interface CardHeaderProps {
  title: string
}

export default function CardHeader({ title }: CardHeaderProps) {
  if (!title) return null

  return (
    <div className='w-full h-fit text-center p-2 rounded-tr-3xl bg-[#ebeaeb]'>
      <h2>{title}</h2>
    </div>
  )
}
