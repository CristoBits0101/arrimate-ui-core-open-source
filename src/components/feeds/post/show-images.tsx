import Image from 'next/image'

export default function ShowImages() {
  return (
    <section className='w-full h-full flex flex-col justify-center items-center gap-6'>
      <article className='relative rounded-3xl w-[25vw] h-[75vh] bg-blue-200 flex justify-center items-center'>
        <Image
          className='drop-shadow w-full h-full object-cover aspect-video rounded-3xl'
          src='/images/posts/aspect-ratio-16-9/image1.jpg'
          alt='1'
          layout='fill'
        />
      </article>
      <hr />
      <article className='relative rounded-3xl w-[25vw] h-[75vh] bg-blue-200 flex justify-center items-center'>
        <Image
          className='drop-shadow w-full h-full object-cover aspect-video rounded-3xl'
          src='/images/posts/aspect-ratio-16-9/image2.jpg'
          alt='2'
          layout='fill'
        />
      </article>
      <hr />
      <article className='relative rounded-3xl w-[25vw] h-[75vh] bg-blue-200 flex justify-center items-center'>
        <Image
          className='drop-shadow w-full h-full object-cover aspect-video rounded-3xl'
          src='/images/posts/aspect-ratio-16-9/image3.jpg'
          alt='3'
          layout='fill'
        />
      </article>
    </section>
  )
}
