import { ReactElement, useRef } from 'react'
import Layout from '@/layouts/layout'
import { useProductStore } from '@/stores/productStore'
import Products from '@/content/products.json'
import { Product } from '@/interfaces/product.interface'
import { CartItem } from '@/components/CartItem'
import { motion } from 'framer-motion'

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
  const selectedProductDetails: Product[] =
    Products.filter((product) =>
      Array.from(allSelectedProducts.keys()).some((it) => it === product.id)
    ) || []

  return (
    <div className="flex flex-col relative items-center px-[60px] w-screen h-screen flex-wrap">
      <motion.div
        initial={selectedProductDetails.length > 0 ? { translateX: 2000 } : ''}
        animate={{ translateX: 0 }}
        transition={{ duration: 1.5 }}
        className="mt-[100px] w-full h-full"
      >
        {selectedProductDetails.length > 0 ? (
          selectedProductDetails.map((product: Product, index: number) => (
            <>
              <Item item={product} key={product.id} />
              <Separator />
              {index == selectedProductDetails.length - 1 && (
                <TotalPrice sum={totalPrice}></TotalPrice>
              )}
            </>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="h-[90%] flex flex-col justify-center items-center bg-opacity-25 bg-blue text-center"
          >
            <p className="text-2xl font-bold">Oops!</p>
            <br />
            <p className="w-[50%] text-center text-base">
              It looks like your cart is currently empty. To add items to your
              cart, please browse our website and select the products you wish
              to purchase.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
CartScreen.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default CartScreen
