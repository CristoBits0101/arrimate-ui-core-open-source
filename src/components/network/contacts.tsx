import contactsBlackSVG from '@/assets/icons/sidebar/black/contacts.svg'
import contactsWhiteSVG from '@/assets/icons/sidebar/white/contacts.svg'
import NavigationItem from '@/components/navigation/menu/item'

export default function Contacts() {
  return (
    <NavigationItem
      route='contacts'
      blackIcon={contactsBlackSVG}
      whiteIcon={contactsWhiteSVG}
      textKey='contacts'
    />
  )
}
