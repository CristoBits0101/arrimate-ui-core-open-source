'use client'

import SettingButton from '@/modules/configuration/components/buttons/options-button'
import icon from '@/modules/feeds/assets/icons/links/black/home.svg'
import { useTranslations } from 'next-intl'

interface PostOptionsProps {
  handleSelectOption: (
    option: 'publish' | 'stream' | 'manage' | 'performance'
  ) => void
}

const PostOptionsPanel: React.FC<PostOptionsProps> = ({
  handleSelectOption
}) => {
  const t = useTranslations('Posts')

  return (
    <div className='flex flex-col items-center'>
      <SettingButton
        icon={icon}
        label={t('publish')}
        onClick={() => handleSelectOption('publish')}
        altText={t('publish')}
      />
      <SettingButton
        icon={icon}
        label={t('stream')}
        onClick={() => handleSelectOption('stream')}
        altText={t('stream')}
      />
      <SettingButton
        icon={icon}
        label={t('manage')}
        onClick={() => handleSelectOption('manage')}
        altText={t('manage')}
      />
      <SettingButton
        icon={icon}
        label={t('performance')}
        onClick={() => handleSelectOption('performance')}
        altText={t('performance')}
      />
    </div>
  )
}

export default PostOptionsPanel
