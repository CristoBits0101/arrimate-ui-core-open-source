'use client'

// Components
import BackButton from '@/modules/configuration/settings-panel/buttons/back-button'
import ManageOptions from '@/modules/feeds/components/options/manage-options'
import PerformanceOptions from '@/modules/feeds/components/options/performance-options'
import PostOptions from '@/modules/feeds/components/options/post-options'
import PublishOptions from '@/modules/feeds/components/options/publish-options'

// Custom
import { usePostSettings } from '@/modules/feeds/hooks/panels/usePostSettings'

// Intl
import { useTranslations } from 'next-intl'

// Styles
import '@/modules/configuration/styles/gradient-collection.css'

export default function PostsPanel() {
  // Switch options
  const { selectedOption, handleSelectOption, handleBack } = usePostSettings()
  // Translations
  const t = useTranslations('Posts')
  return (
    <div className='w-full h-full rounded-3xl border-[0.05rem] border-[#EBEAEB] border-solid dark:border-[#3b3b40] gradient-glass shadow-sm'>
      {selectedOption === null ? (
        <>
          <div className='relative w-full h-fit py-4 border-b-[0.05rem] border-[#EBEAEB] border-solid'>
            <h2 className='w-full text-center text-lg font-medium'>
              {t('posts')}
            </h2>
          </div>
          <PostOptions handleSelectOption={handleSelectOption} />
        </>
      ) : (
        <div className='flex flex-col items-center py-4'>
          <div className='w-full h-fit flex items-center pb-4 border-b-[0.05rem] border-[#EBEAEB] border-solid'>
            <h2 className='relative text-center text-lg font-medium w-full'>
              {t(selectedOption)}
              <BackButton onClick={handleBack} />
            </h2>
          </div>
          {selectedOption === 'publish' && <PublishOptions />}
          {selectedOption === 'manage' && <ManageOptions />}
          {selectedOption === 'performance' && <PerformanceOptions />}
        </div>
      )}
    </div>
  )
}
