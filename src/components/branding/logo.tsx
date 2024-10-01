// import Image from "next/image";
import styles from '@/styles/components/branding/logo.module.css'
import { ds } from '@/lib/fonts'

interface LogoProps {
  centerText?: boolean
}

export default function Logo({ centerText = false }: LogoProps) {
  return (
    <div className={centerText ? styles.centeredLogo : styles.logo}>
      {/* <Image src="" alt="Logo of Arrimate" width={0} height={0} /> */}
      <h1 className={ds.className}>Arrimate</h1>
    </div>
  )
}
