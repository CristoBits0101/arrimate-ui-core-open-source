import Logo from '@/components/branding/logo'
import Navbar from '@/layouts/navbar'
import Searcher from '@/components/navigation/searcher'
import styles from '@/styles/layouts/header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Searcher />
      <Navbar />
    </header>
  )
}
