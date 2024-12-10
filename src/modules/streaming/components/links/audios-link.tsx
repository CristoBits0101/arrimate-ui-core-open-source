import audioBlackSVG from '@/modules/streaming/assets/black/audio.svg'
import audioWhiteSVG from '@/modules/streaming/assets/white/audio.svg'
import NavigationItem from '@/modules/navigation/components/links/navbar-link'

export default function Audios() {
  return (
    <NavigationItem
      route='audios'
      blackIcon={audioBlackSVG}
      whiteIcon={audioWhiteSVG}
      textKey='audios'
    />
  )
}
