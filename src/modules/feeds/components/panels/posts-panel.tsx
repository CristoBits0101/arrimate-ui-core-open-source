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
  const t = useTranslations('Publish') // Traducciones bajo el namespace "Publish"

  return (
    <div className='w-full h-full rounded-3xl border-[0.05rem] border-[#EBEAEB] border-solid dark:border-[#3b3b40]'>
      {/* Panel Principal con Título */}
      <div className='relative w-full h-fit py-4 border-b-[0.05rem] border-[#EBEAEB] border-solid'>
        <h2 className='w-full text-center text-lg font-medium'>
          {t('postsTitle')} {/* Traducción de "Posts Publicaciones" */}
        </h2>
      </div>

      {/* Contenido dinámico basado en la opción seleccionada */}
      {selectedOption === null ? (
        // Renderiza las opciones principales
        <PostOptions handleSelectOption={handleSelectOption} />
      ) : (
        <div className='flex flex-col items-center py-4'>
          {/* Título y botón de regresar */}
          <div className='w-full h-fit flex items-center pb-4 border-b-[0.05rem] border-[#EBEAEB] border-solid'>
            <h2 className='relative text-center text-lg font-medium w-full'>
              {t(selectedOption)} {/* Traducción de la opción seleccionada */}
              <BackButton onClick={handleBack} />
            </h2>
          </div>
          {/* Panel específico según la opción seleccionada */}
          {selectedOption === 'publish' && <PublishOptions />}
          {selectedOption === 'manage' && <ManageOptions />}
          {selectedOption === 'performance' && <PerformanceOptions />}
        </div>
      )}
    </div>
  )
}
