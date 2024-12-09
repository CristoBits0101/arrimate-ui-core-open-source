'use client'

import PostOptions from '@/modules/feeds/components/options/post-options'
import PublishOptions from '@/modules/feeds/components/options/publish-options'
import ManageOptions from '@/modules/feeds/components/options/manage-options'
import PerformanceOptions from '@/modules/feeds/components/options/performance-options'
import BackButton from '@/modules/configuration/components/buttons/back-button'
import { usePostSettings } from '@/modules/feeds/hooks/usePostSettings'
import { useTranslations } from 'next-intl'

export default function PostsPanel() {
  const { selectedOption, handleSelectOption, handleBack } = usePostSettings()
  const t = useTranslations('PostsPanel')

  return (
    <div className='w-full h-full rounded-3xl border-[0.05rem] border-[#EBEAEB] border-solid dark:border-[#3b3b40]'>
      {selectedOption === null ? (
        // Renderiza las opciones principales
        <PostOptions handleSelectOption={handleSelectOption} />
      ) : (
        // Renderiza el título, botón de volver y opciones seleccionadas
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
