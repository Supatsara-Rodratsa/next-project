import { ReactElement, useRef } from 'react'
import Layout from '@/layouts/layout'
import { useProductStore } from '@/stores/productStore'
import Products from '@/content/products.json'
import { Product } from '@/interfaces/product.interface'
import { CartItem } from '@/components/CartItem'

type ItemProps = {
  item: Product
}

type TotalPriceProps = {
  sum: number
}

const Separator = () => (
  <hr className="w-full h-[2px] mx-auto my-2 bg-green border-0 rounded" />
)

const Item = ({ item }: ItemProps) => (
  <div className="flex flex-col gap-10 my-10">
    <CartItem {...item}> </CartItem>
  </div>
)

const TotalPrice = ({ sum }: TotalPriceProps) => {
  return (
    <div className="flex justify-end gap-5 text-xl my-10">
      <p className="font-bold mr-10">Total Price</p>
      <p>{sum}</p>
      <p>Euro</p>
    </div>
  )
}

function CartScreen() {
  const allSelectedProducts = useProductStore((x) => x.allSelectedProducts)
  const totalPrice = useProductStore((x) => x.totalPrice)
  const selectedProductDetails =
    Products.filter((product) =>
      Array.from(allSelectedProducts.keys()).some((it) => it === product.id)
    ) || []

  return (
    <div className="flex flex-col justify-center relative items-center px-[60px] w-screen flex-wrap">
      <div className="mt-[100px] w-full">
        {selectedProductDetails.map((product: Product, index: number) => (
          <>
            <Item item={product} key={product.id} />
            <Separator />
            {index == selectedProductDetails.length - 1 && (
              <TotalPrice sum={totalPrice}></TotalPrice>
            )}
          </>
        ))}
      </div>
    </div>
  )
}

CartScreen.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default CartScreen
