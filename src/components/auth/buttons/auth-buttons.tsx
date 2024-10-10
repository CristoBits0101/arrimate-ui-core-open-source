import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function AuthButtons() {
  const locale = useLocale()
  return (
    <div className='flex w-full h-fit flex-row items-center justify-between'>
      <button className='bg-[#F4F4F4] pr-6 pl-6 pt-2 pb-2 border-[0.05rem] border-[#bfbdc050] text-sm'>
        <Link href={`/${locale}/sign-in`}>Sign In</Link>
      </button>
      <button className='bg-[#F4F4F4] pr-6 pl-6 pt-2 pb-2 border-[0.05rem] border-[#bfbdc050] text-sm'>
        <Link href={`/${locale}/sign-up`}>Sign Up</Link>
      </button>
    </div>
  )
}
