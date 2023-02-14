import { Product } from '@/interfaces/product.interface'
import Image from 'next/image'

export const ProductDetail = (props: Product) => {
  const renderProductImage = (image: string, index: number) => (
    <Image
      className={`object-cover ${
        index % 2 == 0 ? 'rounded-tl-[70px]' : 'rounded-br-[70px]'
      }`}
      src={image}
      alt="image"
      style={{ width: '100%', height: '100%' }}
      width="0"
      height="0"
    />
  )
  return (
    // <pre>{JSON.stringify(props)}</pre>
    <div className="flex gap-5">
      <div className="flex gap-3">
        {props.image.map((item: string, index: number) =>
          renderProductImage(item, index)
        )}
      </div>
    </div>
  )
}
