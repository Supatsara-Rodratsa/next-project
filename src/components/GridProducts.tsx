import Image from 'next/image'
import { ProductImage } from './ProductItem'
import products from '@/content/products.json'
import { Product } from '@/interfaces/candle.interface'
import { useRouter } from 'next/router'

export const GridProduct = () => {
  const router = useRouter()

  const renderProductItems = (product: Product) => {
    return (
      <ProductImage key={product.id} productName={product.name} {...product} />
    )
  }
  return (
    <div className="container flex items-center justify-center">
      <div className="grid gap-4 grid-cols-3 grid-rows-3 w-full h-full lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3 px-[30px] py-[60px]">
        {products.map(renderProductItems)}
      </div>
    </div>
  )
}
