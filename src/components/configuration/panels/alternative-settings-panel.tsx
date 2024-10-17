'use client'

import Image from 'next/image'
import language from '@/assets/icons/settings/language.svg'
import themes from '@/assets/icons/settings/themes.svg'
import password from '@/assets/icons/settings/password.svg'

export default function SettingsPanel() {
  return (
    <section className='w-full h-full flex flex-col gap-4 p-4 bg-[#F4F4F4] rounded-2xl border-[0.05rem] border-[#bfbdc050] border-solid shadow shadow-[#F0F0FE]'>
      {/*  */}
      <details name='option' className='group'>
        <summary className='text-sm font-medium flex justify-between items-center cursor-pointer mb-2'>
          <h2 className='flex gap-2'>
            <Image src={language} alt='Languages' className='w-5' />
            Language
          </h2>
          <span className='group-open:rotate-90 transition-transform duration-300'>
            -
          </span>
        </summary>
        <article>
          <p>Language options...</p>
        </article>
      </details>
      {/*  */}
      <details name='option' className='group'>
        <summary className='text-sm font-medium flex justify-between items-center cursor-pointer mb-2'>
          <h2 className='flex gap-2'>
            <Image src={themes} alt='Languages' className='w-5' />
            Themes
          </h2>
          <span className='group-open:rotate-180 transition-transform duration-300'>
            -
          </span>
        </summary>
        <article>
          <p>Theme options...</p>
        </article>
      </details>
      {/*  */}
      <details name='option' className='group'>
        <summary className='text-sm font-medium flex justify-between items-center cursor-pointer mb-2'>
          <h2 className='flex gap-2'>
            <Image src={password} alt='Languages' className='w-5' />
            Password
          </h2>
          <span className='group-open:rotate-180 transition-transform duration-300'>
            -
          </span>
        </summary>
        <article>
          <p>Theme options...</p>
        </article>
      </details>
    </section>
  )
}
