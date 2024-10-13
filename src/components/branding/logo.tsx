// import Image from "next/image";
import { ds } from '@/lib/fonts'

export default function Logo() {
  return (
    <div className='text-4xl font-medium flex justify-center items-center w-full h-[2.5rem] dark:text-[#9AA0A6]'>
      <h1 className={ds.className}>Arrimate</h1>
    </div>
  )
}
