// import Image from "next/image";
import styles from '@/styles/branding/logo.module.css'
import { ds } from '@/lib/fonts'

export default function Logo() {
  return (
    <div className={styles.logo}>
      {/* <Image src="" alt="Logo of Arrimate" width={0} height={0} /> */}
      <h1 className={ds.className}>Arrimate</h1>
    </div>
  )
}
