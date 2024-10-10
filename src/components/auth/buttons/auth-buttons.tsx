import Image from 'next/image'
import Link from 'next/link'
import chevronRight from '@/assets/icons/arrow/chevron_right.svg'
import { useLocale } from 'next-intl'

export default function AuthButtons() {
  const locale = useLocale()
  return (
    <div className='flex w-full h-fit flex-row items-center justify-between'>
      <button className='flex flex-row gap-1 bg-[#F4F4F4] pr-6 pl-6 pt-2 pb-2 border-[0.094rem] border-[#bfbdc050] text-sm hover:bg-[#bfbdc050]'>
        <Link href={`/${locale}/sign-in`}>Sign In</Link>
        <Image
          className='h-5 w-5'
          src={chevronRight}
          alt='Google'
        />
      </button>
      <button className='flex flex-row gap-1 bg-[#F4F4F4] pr-6 pl-6 pt-2 pb-2 border-[0.094rem] border-[#bfbdc050] text-sm hover:bg-[#bfbdc050]'>
        <Link href={`/${locale}/sign-up`}>Sign Up</Link>
        <Image
          className='h-5 w-5'
          src={chevronRight}
          alt='Google'
        />
      </button>
    </div>
  )
}
