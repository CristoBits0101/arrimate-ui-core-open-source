import Logo from '@/components/branding/logo'
import Pages from '@/components/navigation/menu/pages'
import Searcher from '@/components/navigation/search/searcher'

export default function Header() {
  return (
    <header>
      <Logo />
      <Searcher />
      <Pages />
    </header>
  )
}
