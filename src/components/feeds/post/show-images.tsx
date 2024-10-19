import Image from 'next/image'

export default function ShowImages() {
  return (
    <section className='w-full h-full flex flex-col justify-center items-center gap-6'>
      <article className='rounded-3xl w-[25vw] h-[75vh] bg-blue-200 flex justify-center items-center'>
        <Image
          className='w-full h-full aspect-video object-cover'
          src=''
          alt='1'
        />
      </article>
      <hr />
      <article className='rounded-3xl w-[25vw] h-[75vh] bg-blue-200 flex justify-center items-center'>
        <Image
          className='w-full h-full aspect-video object-cover'
          src=''
          alt='2'
        />
      </article>
      <hr />
      <article className='rounded-3xl w-[25vw] h-[75vh] bg-blue-200 flex justify-center items-center'>
        <Image
          className='w-full h-full aspect-video object-cover'
          src=''
          alt='3'
        />
      </article>
    </section>
  )
}
