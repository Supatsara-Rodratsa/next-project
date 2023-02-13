import Image from 'next/image'
import { useRouter } from 'next/router'

export type ProductImageProps = {
  id: string
  image: string
  productName?: string
  isProduct: boolean
  onClick?: () => void
}

export const ProductImage = (props: ProductImageProps) => {
  const router = useRouter()
  const nextPage = (id: string) => {
    if (props.isProduct) return router.push({ pathname: '/products/' + id })
  }
  return (
    <div
      className={`w-full overflow-hidden ${
        !props.isProduct ? 'col-span-2 row-span-2' : ''
      }`}
      onClick={() => nextPage(props.id)}
    >
      <span
        className={`relative ${
          props.isProduct ? 'product cursor-pointer' : ''
        }`}
      >
        <Image
          className="object-cover"
          src={props.image}
          alt="image"
          style={{ width: '100%', height: '100%' }}
          width="0"
          height="0"
        />
        <div className="product-overlay"></div>
        <div className="font-bold text-xl text-white product-name">
          {props?.productName}
        </div>
      </span>
    </div>
  )
}
