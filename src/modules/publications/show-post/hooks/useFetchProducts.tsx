'use client'

import { useState, useEffect } from 'react'

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export function useFetchProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products')

        if (!response.ok) {
          console.log(`Failed to fetch products: ${response.status}`)
          setHasError(true)
          return
        }

        const data = await response.json()
        if (Array.isArray(data)) {
          setProducts(data)
        } else {
          console.log('Invalid API response structure!', data)
          setHasError(true)
        }
      } catch (error) {
        console.log('Error fetching products:', error)
        setHasError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, loading, hasError }
}
