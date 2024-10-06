import '@/styles/globals.css'
import Header from '@/layouts/header'
import Sidebar from '@/layouts/sidebar'

export default function HomePage() {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <section>
          <h2 className='text-lg font-semibold' >Tendencias</h2>
          <article>
            <p>
              Información sobre las tendencias actuales en series y películas.
            </p>
          </article>
        </section>
        <section>
          <h2 className='text-lg font-semibold' >Novedades</h2>
          <article>
            <p>Detalles sobre las últimas novedades en Netflix.</p>
          </article>
        </section>
        <section>
          <h2 className='text-lg font-semibold' >Recomendaciones</h2>
          <article>
            <p>Recomendaciones personalizadas por género.</p>
          </article>
        </section>
        <section>
          <h2 className='text-lg font-semibold' >Suscripciones</h2>
          <article>
            <p>Detalles sobre los diferentes planes de suscripción.</p>
          </article>
        </section>
        <section>
          <h2 className='text-lg font-semibold' >Records</h2>
          <article>
            <p>Clasificaciones de contenido en Netflix.</p>
          </article>
        </section>
      </main>
    </>
  )
}
