'use client'

// Buttons
import SettingButton from '@/modules/configuration/settings-panel/buttons/options-button'

// Custom
import { usePost } from '@/modules/publications/create-post/hooks/usePost'

// Icons
import manageIcon from '@/assets/icons/panels/manage-icon.svg'
import performanceIcon from '@/assets/icons/panels/performance-icon.svg'
import publishIcon from '@/assets/icons/panels/publish-icon.svg'
import streamIcon from '@/assets/icons/panels/stream-icon.svg'

// Intl
import { useTranslations } from 'next-intl'

interface PostOptionsProps {
  handleSelectOption: (
    option: 'publish' | 'stream' | 'manage' | 'performance'
  ) => void
}

const PostOptions: React.FC<PostOptionsProps> = ({ handleSelectOption }) => {
  // Access the function to update context
  const { changePost } = usePost()
  // Get translations
  const t = useTranslations('Posts')
  return (
    <div className='flex flex-col items-center'>
      <SettingButton
        icon={publishIcon}
        label={t('publish')}
        onClick={() => handleSelectOption('publish')}
        altText={t('publish')}
      />
      <SettingButton
        icon={streamIcon}
        label={t('stream')}
        onClick={() => changePost('stream')}
        altText={t('stream')}
      />
      <SettingButton
        icon={manageIcon}
        label={t('manage')}
        onClick={() => handleSelectOption('manage')}
        altText={t('manage')}
      />
      <SettingButton
        icon={performanceIcon}
        label={t('performance')}
        onClick={() => handleSelectOption('performance')}
        altText={t('performance')}
      />
    </div>
  )
}

export default PostOptions
