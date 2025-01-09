'use client'

interface PublicationDateProps {
  date?: string
  location?: string
}

export default function PublicationDateSection({
  date,
  location
}: PublicationDateProps) {
  if (!date && !location) return null
  return (
    <section className='w-full h-fit flex gap-1 justify-center items-center'>
      <p className='truncate flex-grow h-fit min-w-0'>
        <span className='h-full text-center text-sm'>
          {date && `${date}`}
          {location && ` • ${location}`}
        </span>
      </p>
    </section>
  )
}
