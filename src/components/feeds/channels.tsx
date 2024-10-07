import channelsBlackSVG from '@/assets/icons/sidebar/black/channels.svg'
import channelsWhiteSVG from '@/assets/icons/sidebar/white/channels.svg'
import NavigationItem from '@/components/navigation/navigation-item'

export default function Channels() {
  return (
    <NavigationItem
      route="channels"
      blackIcon={channelsBlackSVG}
      whiteIcon={channelsWhiteSVG}
      textKey="channels"
    />
  );
}
