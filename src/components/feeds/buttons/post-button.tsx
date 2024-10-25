import Image from 'next/image'

interface PostButtonProps {
  backgroundColor: string
  color: string
  iconSrc: string
  iconAlt: string
  text: string
}

export default function PostButton({
  backgroundColor = '',
  color = '',
  iconSrc = '',
  text = '',
  iconAlt = ''
}: PostButtonProps) {
  return (
    <div className='w-fit h-fit'>
      <button className={`bg-[${backgroundColor}]`}>
        <Image className='w-4 h-4' src={iconSrc} alt={iconAlt} />
      </button>
      <span className={`bg-[${color}]`}>{text}</span>
    </div>
  )
}
