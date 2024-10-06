import '@/styles/globals.css'
import Header from '@/layouts/header'
import Sidebar from '@/layouts/sidebar'

export default function HomePage() {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <section className='bg-slate-300 p-0 m-0'>
          <h2 className='p-0 m-0'>Tendencias</h2>
          <article className='p-0 m-0'>
            <p className='p-0 m-0'>
              Información sobre las tendencias actuales en series y películas.
            </p>
          </article>
        </section>
        <section>
          <h2>Novedades</h2>
          <article>
            <p>Detalles sobre las últimas novedades en Netflix.</p>
          </article>
        </section>
        <section>
          <h2>Recomendaciones</h2>
          <article>
            <p>Recomendaciones personalizadas por género.</p>
          </article>
        </section>
        <section>
          <h2>Suscripciones</h2>
          <article>
            <p>Detalles sobre los diferentes planes de suscripción.</p>
          </article>
        </section>
        <section>
          <h2>Records</h2>
          <article>
            <p>Clasificaciones de contenido en Netflix.</p>
          </article>
        </section>
      </main>
    </>
  )
}
