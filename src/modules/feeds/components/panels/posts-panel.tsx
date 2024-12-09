'use client'

import PostOptionsPanel from '@/modules/feeds/components/x/post-options-panel'
import PublishOptions from '@/modules/feeds/components/x/publish-options'
import ManageOptions from '@/modules/feeds/components/x/manage-options'
import PerformanceOptions from '@/modules/feeds/components/x/performance-options'
import BackButton from '@/modules/configuration/components/buttons/back-button'
import { usePostSettings } from '@/modules/feeds/hooks/usePostSettings'

export default function PostsPanel() {
  const { selectedOption, handleSelectOption, handleBack } = usePostSettings()

  return (
    <div className='w-full h-full rounded-3xl border-[0.05rem] border-[#EBEAEB] border-solid dark:border-[#3b3b40]'>
      {selectedOption === null ? (
        <PostOptionsPanel handleSelectOption={handleSelectOption} />
      ) : (
        <div className='flex flex-col items-center py-4'>
          <BackButton onClick={handleBack} />
          {selectedOption === 'publish' && <PublishOptions />}
          {selectedOption === 'manage' && <ManageOptions />}
          {selectedOption === 'performance' && <PerformanceOptions />}
        </div>
      )}
    </div>
  )
}
