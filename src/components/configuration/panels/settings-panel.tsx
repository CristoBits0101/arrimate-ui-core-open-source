'use client'

// import LanguageSelector from '@/components/configuration/options/language-selector'
// import ModeSelector from '@/components/configuration/options/mode-selector'

export default function SettingsPanel() {
  return (
    <section className='w-full h-full flex flex-col gap-5'>
      <details name='option' className='group'>
        <summary className='text-sm font-semibold flex justify-between items-center cursor-pointer'>
          Language
          <span className='group-open:rotate-90 transition-transform duration-300'>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1d0f0f"><path d="m480-351 173-173-43-42-130 130-130-130-43 42 173 173Zm0 271q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>          </span>
        </summary>
        <div>
          <p>Language options...</p>
        </div>
      </details>
      <details name='option' className='group'>
        <summary className='text-sm font-semibold flex justify-between items-center cursor-pointer'>
          Themes
          <span className='group-open:rotate-180 transition-transform duration-300'>
            ⬇
          </span>
        </summary>
        <div>
          <p>Theme options...</p>
        </div>
      </details>
      <details name='option' className='group'>
        <summary className='text-sm font-semibold flex justify-between items-center cursor-pointer'>
          Password
          <span className='group-open:rotate-180 transition-transform duration-300'>
            ⬇
          </span>
        </summary>
        <div>
          <p>Password update options...</p>
        </div>
      </details>
    </section>
  )
}
