// Fonts
import { shadowsIntoLight } from '@/lib/google/google-fonts'

// GIF
import noProductsAvailable from '@/assets/images/gifs/no_products_available.webp'

// Image
import Image from 'next/image'

// Styles
import '@/modules/publications/show-post/styles/show-post-products-style.css'

// Type props
interface StockEmptyProps {
  text: string
}

export default function StockEmpty({ text }: StockEmptyProps) {
  return (
    <div className='w-full h-full grid place-content-center text-center gap-8'>
      <h2 className={`text-5xl font-medium shakeFix ${shadowsIntoLight.className}`}>
        {text}
      </h2>
      <Image
        src={noProductsAvailable}
        alt='No products available'
        width={400}
        height={400}
        className='m-auto drop-shadow-sm aspect-square object-contain'
      />
    </div>
  )
}
