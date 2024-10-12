import { useTranslations } from 'next-intl'

export default function ModeSelector() {
  const t = useTranslations('SettingsPanel')
  return (
    <section className='w-full h-fit flex flex-col gap-2'>
      <h2 className='flex flex-col justify-center font-medium'>
        {t('themes.title')}
      </h2>
      <select className='w-full h-fit pl-1 pr-1 pt-2 pb-2 border-[0.094rem] border-solid border-[#bfbdc050] outline-none bg-[#F4F4F4]'>
        <option value='dark'>{t('themes.dark')}</option>
        <option value='light'>{t('themes.light')}</option>
      </select>
    </section>
  )
}
