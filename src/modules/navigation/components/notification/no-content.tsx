// fonts
import { shadowsIntoLight } from '@/lib/fonts'

// GIF
import noProductsAvailable from '@/modules/e-commerce/assets/images/no_products_available.webp'

// next/image
import Image from 'next/image'

// Styles
import '@/modules/e-commerce/styles/show-products.css'

interface NoContentProps {
  text: string
}

export default function NoContent({ text }: NoContentProps) {
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
