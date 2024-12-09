'use client'

import icon from '@/modules/feeds/assets/icons/links/white/home.svg'
import SettingButton from '@/modules/configuration/components/buttons/options-button'

interface PostOptionsPanelProps {
  handleSelectOption: (
    option: 'publish' | 'broadcast' | 'manage' | 'performance'
  ) => void
}

const PostOptionsPanel: React.FC<PostOptionsPanelProps> = ({
  handleSelectOption
}) => {
  return (
    <div className='flex flex-col items-center'>
      <SettingButton
        icon={icon}
        label='Publicar'
        onClick={() => handleSelectOption('publish')}
        altText='Publicar icon'
      />
      <SettingButton
        icon={icon}
        label='Transmitir'
        onClick={() => handleSelectOption('broadcast')}
        altText='Transmitir icon'
      />
      <SettingButton
        icon={icon}
        label='Gestionar'
        onClick={() => handleSelectOption('manage')}
        altText='Gestionar icon'
      />
      <SettingButton
        icon={icon}
        label='Rendimiento'
        onClick={() => handleSelectOption('performance')}
        altText='Rendimiento icon'
      />
    </div>
  )
}

export default PostOptionsPanel
