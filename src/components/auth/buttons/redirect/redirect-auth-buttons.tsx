import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

export default function AuthButtons() {
  const locale = useLocale()
  const t = useTranslations('AuthButtons')
  return (
    <div className='flex w-full h-[2.5rem] flex-row items-center justify-between'>
      <button className='font-medium w-[7.25rem] flex flex-row justify-center gap-1 bg-[#F4F4F4] p-2 border-[0.05rem] border-[#bfbdc050] border-solid hover:bg-[#bfbdc050] h-full'>
        <Link className='w-full h-fit flex justify-center' href={`/${locale}/sign-in`}>
          {t('signIn')} 
        </Link>
      </button>
      <button className='font-medium w-[7.25rem] flex flex-row justify-center gap-1 bg-[#F4F4F4] p-2 border-[0.05rem] border-[#bfbdc050] border-solid hover:bg-[#bfbdc050] h-full'>
        <Link className='w-full h-fit flex justify-center' href={`/${locale}/sign-up`}>
          {t('signUp')}
        </Link>
      </button>
    </div>
  )
}
