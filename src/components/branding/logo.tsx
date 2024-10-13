// import Image from "next/image";
import { ds } from '@/lib/fonts'

export default function Logo() {
  return (
    <div className='text-4xl font-medium flex justify-center items-center h-[2.5rem]'>
      <h1 className={ds.className}>Arrimate</h1>
    </div>
  )
}
