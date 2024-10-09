import Logo from '@/components/branding/logo'
import Navbar from '@/components/navigation/menu/panel'

export default function Header() {
  return (
    <header className='bg-red-500'>
      <Logo />
      <Navbar />
    </header>
  )
}
