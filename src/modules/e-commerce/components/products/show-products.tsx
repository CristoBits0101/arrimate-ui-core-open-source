'use client'

// next/image
import Image from 'next/image'

// next-intl
import { useTranslations } from 'next-intl'

// Notifications
import NoContent from '@/modules/navigation/components/notification/no-content'

// react
import { useEffect, useState } from 'react'

// Spinner
import { PuffLoader } from 'react-spinners'

// Product type
interface Product {
  asin: string
  product_title: string
  product_price: string
  product_original_price: string | null
  currency: string
  product_star_rating: string
  product_num_ratings: number
  product_url: string
  product_photo: string
  product_num_offers: number
  product_minimum_offer_price: string
  is_best_seller: boolean
  is_amazon_choice: boolean
  is_prime: boolean
  climate_pledge_friendly: boolean
  sales_volume: string | null
  delivery: string
  has_variations: boolean
}

export default function ShowProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Translations
  const t = useTranslations('ECommerce')

  // Load products when rendering the component
  useEffect(() => {
    // Search products
    async function fetchProducts() {
      try {
        // Check API key
        if (!process.env.AMAZON_CLIENT_SECRET)
          alert('Unable to connect to the store!')
          setHasError(true)
        // Make query
        const response = await fetch(
          'https://real-time-amazon-data.p.rapidapi.com/seller-products?seller_id=A02211013Q5HP3OMSZC7W&country=US&page=1&sort_by=RELEVANCE',
          {
            method: 'GET',
            headers: new Headers({
              'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com',
              'x-rapidapi-key': process.env.AMAZON_CLIENT_SECRET || ''
            })
          }
        )
        // Check if response is successful
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`)
        // Parse JSON response and set products
        const data = await response.json()
        // Verify data structure in the response
        if (!data.data || !Array.isArray(data.data.seller_products))
          throw new Error('Invalid API response structure')
        setProducts(data.data.seller_products)
      } catch (error) {
        console.error('Error fetching products:', error)
        setHasError(true)
      } finally {
        setLoading(false)
      }
    }

    // Fetch products when the component mounts
    fetchProducts()
  }, [])

  // Show banner when the query is process
  if (loading)
    return (
      <div className='w-full h-full grid place-content-center'>
        <PuffLoader color='' />
      </div>
    )

  if (hasError || !products.length) return <NoContent text={t('noProducts')} />

  return (
    <ul className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8'>
      {products.map((product) => (
        <li key={product.asin}>
          <article>
            <header className='relative w-full h-40'>
              <Image
                src={product.product_photo}
                alt={product.product_title}
                fill
                loading='lazy'
                className='object-contain'
              />
            </header>
            <section className='p-4'>
              <h2 className='text-lg font-semibold'>{product.product_title}</h2>
              <p className='text-gray-700'>{product.product_price}</p>
              {product.product_original_price && (
                <p className='line-through text-gray-500'>
                  Original Price: {product.product_original_price}
                </p>
              )}
              <p className='text-yellow-500 font-medium'>
                Rating: ⭐ {product.product_star_rating}
              </p>
              <p className='mt-4'>
                <a
                  href={product.product_url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-500 hover:underline'
                >
                  View on Amazon
                </a>
              </p>
            </section>
          </article>
        </li>
      ))}
    </ul>
  )
}
