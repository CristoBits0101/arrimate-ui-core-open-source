interface CardHeaderProps {
  title: string
}

export default function CardHeader({ title }: CardHeaderProps) {
  if (!title) return null

  return (
    <div className='w-full h-fit text-center p-2 bg-blue-500'>
      <h2>{title}</h2>
    </div>
  )
}
