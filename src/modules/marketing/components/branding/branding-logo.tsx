import { ds } from '@/lib/fonts'

export default function Logo() {
  return (
    <div className='text-4xl font-medium flex justify-center items-center w-full h-[2.5rem] dark:text-[#ececed]'>
      <h1 className={ds.className}>Arrímate</h1>
    </div>
  )
}
