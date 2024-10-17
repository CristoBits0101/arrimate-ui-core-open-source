'use client'

import Image from 'next/image'
import LanguageSelector from '@/components/configuration/options/language-selector'
import ThemeSelector from '@/components/configuration/options/theme-selector'
import password from '@/assets/icons/settings/password.svg'

export default function SettingsPanel() {
  return (
    <section className='w-full h-full flex flex-col gap-6 p-6 rounded-3xl border-[0.05rem] border-[#bfbdc050] border-solid'>
      {/*  */}
      <LanguageSelector />
      {/*  */}
      <ThemeSelector />
      {/*  */}
      <details name='option' className='group'>
        <summary className='text-sm font-medium flex justify-between items-center cursor-pointer mb-2'>
          <h2 className='flex gap-2'>
            <Image
              src={password}
              alt='Languages'
              className='w-5 h-5 aspect-square'
            />
            Password
          </h2>
        </summary>
        <article>
          <p>Theme options...</p>
        </article>
      </details>
    </section>
  )
}
