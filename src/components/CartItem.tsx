import { Product } from '@/interfaces/product.interface'
import Image from 'next/image'
import { Button } from './Button'
import { useProductStore } from '@/stores/productStore'

export const CartItem = (props: Product) => {
  const allSelectedProducts = useProductStore((x) => x.allSelectedProducts)
  const addItem = useProductStore((x) => x.addItem)
  const removeItem = useProductStore((x) => x.removeItem)
  return (
    <div className="flex w-full justify-center">
      <div className="flex gap-10 w-[90%]">
        <Image
          className="object-cover rounded-[20px]"
          src={props.image[0]}
          alt="image"
          width="200"
          height="0"
        />
        <div className="flex flex-wrap justify-between w-full items-center">
          <div className="uppercase text-xl font-bold">
            <span>{props.name}</span>
            {props.isHairTreatment ? ' - Hair Treatment' : ' - Shower Cream'}
          </div>
          <div className="flex justify-between gap-5">
            <p className="font-bold text-xl">Price</p>
            <p className="text-xl">{props.price} Euro</p>
          </div>
          <div className="flex gap-6 items-center h-fit">
            <Button
              label="-"
              isCircle
              onClick={() => removeItem(props.id)}
            ></Button>
            <p className="text-xl">{allSelectedProducts.get(props.id) || 0}</p>
            <Button
              label="+"
              isCircle
              onClick={() => addItem(props.id)}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  )
}
