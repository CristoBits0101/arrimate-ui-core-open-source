import unknownImage from '@/modules/marketing/assets/images/unknownImage.jpg'

interface HeaderSpanProps {
  src?: string
  connection: boolean
}

export default function HeaderSpan({ src, connection }: HeaderSpanProps) {
  return (
    <span className='shadow-sm relative inline-flex overflow-hidden rounded-full border border-solid border-[#EBEAEB] p-1'>
      {connection ? (
        <span className='absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#68EF00_0%,#5EBAA6_50%,#68EF00_100%)]'></span>
      ) : (
        <span className='absolute inset-[-1000%] bg-[#453C41]'></span>
      )}
      <header
        className='relative w-16 h-16 flex items-center justify-center bg-cover bg-center bg-no-repeat aspect-square rounded-full z-10'
        style={{ backgroundImage: `url(${src || unknownImage})` }}
      ></header>
    </span>
  )
}
