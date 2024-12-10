'use client'

import SettingButton from '@/modules/configuration/components/buttons/options-button'
import publishIcon from '@/modules/feeds/assets/icons/panels/publish.svg'
import streamIcon from '@/modules/streaming/assets/white/live.svg'
import manageIcon from '@/modules/feeds/assets/icons/panels/manage.svg'
import performanceIcon from '@/modules/feeds/assets/icons/panels/performance.svg'
import { useTranslations } from 'next-intl'

interface PostOptionsProps {
  handleSelectOption: (
    option: 'publish' | 'stream' | 'manage' | 'performance'
  ) => void
}

const PostOptions: React.FC<PostOptionsProps> = ({ handleSelectOption }) => {
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
        onClick={() => handleSelectOption('stream')}
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
