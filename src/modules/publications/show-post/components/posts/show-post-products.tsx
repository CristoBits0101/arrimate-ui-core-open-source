'use client'

// Components
import NoContent from '@/modules/publications/show-post/components/alerts/stock-empty'

// Hooks
import { useFetchProducts } from '@/modules/publications/show-post/hooks/useFetchProducts'

// Image
import Image from 'next/image'

// Intl
import { useTranslations } from 'next-intl'

// Spinner
import { PuffLoader } from 'react-spinners'

export default function ShowProducts() {
  const { products, loading, hasError } = useFetchProducts()

  // Translations
  const t = useTranslations('ECommerce')

  // Loading
  if (loading)
    return (
      <div className='w-full h-full grid place-content-center'>
        <PuffLoader />
      </div>
    )

  // Unavailable
  if (hasError || !products.length) return <NoContent text={t('noProducts')} />

  return (
    <ul className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8'>
      {products.map((product) => (
        <li key={product.id} className='h-fit hover:cursor-pointer'>
          <article className='w-full h-fit flex flex-col gap-4'>
            <header className='relative w-full h-32'>
              <Image
                src={product.image}
                alt={product.title}
                fill
                loading='lazy'
                className='object-contain aspect-square'
              />
            </header>
            <section className='w-full h-24 flex flex-col justify-between gap-2 font-medium'>
              <div className='w-full h-1/2 text-justify '>
                <h2 className='text-cyan-800 line-clamp-2'>{product.title}</h2>
              </div>
              <div className='w-full h-1/2'>
                <p className='grid grid-cols-2'>
                  <span>🤩 {`${product.rating.rate}/5 `}</span>
                  <span>🤔 {product.rating.count} </span>
                </p>
                <p className='grid grid-cols-2'>
                  <span>🤑 {`${product.price.toFixed(2)} €`}</span>
                  <span>🤯 -{product.rating.count}%</span>
                </p>
              </div>
            </section>
          </article>
        </li>
      ))}
    </ul>
  )
}
