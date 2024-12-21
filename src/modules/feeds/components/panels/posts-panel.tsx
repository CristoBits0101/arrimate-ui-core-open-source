'use client'

import PostOptions from '@/modules/feeds/components/options/post-options'
import PublishOptions from '@/modules/feeds/components/options/publish-options'
import ManageOptions from '@/modules/feeds/components/options/manage-options'
import PerformanceOptions from '@/modules/feeds/components/options/performance-options'
import BackButton from '@/modules/configuration/components/buttons/back-button'
import { usePostSettings } from '@/modules/feeds/hooks/panels/usePostSettings'
import { useTranslations } from 'next-intl'
import '@/modules/configuration/styles/gradient-collection.css'

export default function PostsPanel() {
  const { selectedOption, handleSelectOption, handleBack } = usePostSettings()
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
