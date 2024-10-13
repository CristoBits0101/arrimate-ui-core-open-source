import Image from 'next/image'
import language from '@/assets/icons/settings/themes.svg'
import { useTranslations } from 'next-intl'

export default function ModeSelector() {
  const t = useTranslations('SettingsPanel')
  return (
    <section className='text-sm w-full h-fit flex flex-col gap-2'>
      <div className='w-full h-fit flex flex-row items-center font-medium gap-2'>
        <Image src={language} alt='Languages' className='w-5' />
        <h2 className='font-semibold flex flex-row items-center'>
          {t('themes.title')}
        </h2>
      </div>
      <select className='rounded-lg font-normal w-full h-fit pl-1 pr-1 pt-2 pb-2 border-[0.05rem] border-solid border-[#bfbdc050] outline-none bg-[#F4F4F4]'>
        <option value='dark'>{t('themes.dark')}</option>
        <option value='light'>{t('themes.light')}</option>
      </select>
    </section>
  )
}
