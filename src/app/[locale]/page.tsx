'use client'

import Header from '@/layouts/header'
import Aside from '@/layouts/aside'
import CarouselHome from '@/components/feeds/carousel/carousel-home'
import '@/styles/globals.css'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className='flex flex-col gap-y-5 align-middle'>
        <section>
          <h2 className='text-lg font-semibold'>Tendencias</h2>
          <article>
            <CarouselHome />
          </article>
        </section>
        <section>
          <h2 className='text-lg font-semibold'>Novedades</h2>
          <article>
            <CarouselHome />
          </article>
        </section>
        <section>
          <h2 className='text-lg font-semibold'>Recomendaciones</h2>
          <article>
            <CarouselHome />
          </article>
        </section>
        <section>
          <h2 className='text-lg font-semibold'>Suscripciones</h2>
          <article>
            <CarouselHome />
          </article>
        </section>
        <section>
          <h2 className='text-lg font-semibold'>Records</h2>
          <article>
            <CarouselHome />
          </article>
        </section>
      </main>
      <Aside />
    </>
  )
}
