import { ProductImageProp } from '@/interfaces/product.interface'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const ProductImage = (props: ProductImageProp) => {
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
          src={props.image[0]}
          alt="image"
          style={{ width: '100%', height: '100%' }}
          width="0"
          height="0"
        />
        <div className="product-overlay"></div>
        <div className="font-bold text-2xl text-white product-name flex flex-col">
          <p>{props?.name}</p>
          <p>{props?.isHairTreatment ? 'Hair Treatment' : 'Shower Cream'}</p>
        </div>
      </span>
    </div>
  )
}
