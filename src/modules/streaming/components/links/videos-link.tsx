import videosBlackSVG from '@/modules/streaming/assets/black/videos.svg'
import videosWhiteSVG from '@/modules/streaming/assets/white/videos.svg'
import NavigationItem from '@/modules/navigation/components/links/navbar-link'

export default function Videos() {
  return (
    <NavigationItem
      route='videos'
      blackIcon={videosBlackSVG}
      whiteIcon={videosWhiteSVG}
      textKey='videos'
    />
  )
}
