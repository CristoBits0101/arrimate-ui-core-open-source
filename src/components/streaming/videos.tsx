import videosBlackSVG from '@/assets/icons/sidebar/black/videos.svg'
import videosWhiteSVG from '@/assets/icons/sidebar/white/videos.svg'
import NavigationItem from '@/components/navigation/menu/item'

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
