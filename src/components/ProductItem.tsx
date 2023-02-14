import { ProductItemProp } from '@/interfaces/product.interface'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export const ProductItem = (props: ProductItemProp) => {
  return (
    <div
      className={clsx(
        'w-full overflow-hidden',
        !props.isProduct && 'col-span-2 row-span-2'
      )}
      onClick={props.onClick}
    >
      <span
        className={clsx(
          'relative',
          props.isProduct && 'product cursor-pointer'
        )}
      >
        <motion.img
          className="object-cover"
          src={props.image[0]}
          alt="image"
          style={{ width: '100%', height: '100%' }}
          width="0"
          height="0"
        />
        <div className="product-overlay"></div>
        <div className="font-bold text-2xl text-white product-name flex flex-col uppercase">
          <p>{props?.name}</p>
          <p>{props?.isHairTreatment ? 'Hair Treatment' : 'Shower Cream'}</p>
        </div>
      </span>
    </div>
  )
}
