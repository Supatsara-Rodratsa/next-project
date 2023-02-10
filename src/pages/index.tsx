import Head from 'next/head'
import { Product } from '@/components/Product'
import { candleProducts } from '@/mocks/candle.mock'
import { Candle } from '@/interfaces/candle.interface'
import { useProductStore } from '@/stores/productStore'
import { Cart } from '@/components/Cart'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Loader from '@/components/Loader'
import Layout from '@/layouts/layout'

const renderProductItem = (product: Candle) => (
  <div
    key={product.name}
    className="flex flex-col justify-center items-center relative mb-10"
  >
    <Product {...product} />
  </div>
)

function ProductScreen() {
  const total = useProductStore((x) => x.total)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loading
      ? document?.querySelector('body')?.classList.add('loading')
      : document?.querySelector('body')?.classList.remove('loading')
  }, [loading])

  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            className="h-screen w-screen -mt-16 z-50 absolute bg-background"
          >
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <div className="bg-primary overflow-scroll flex flex-col justify-center relative">
              <Head>
                <title>rose</title>
              </Head>
              <h1
                data-testid="header"
                className="text-[40px] py-14 w-full text-center font-medium"
              >
                Candle Products
              </h1>
              <div className="flex flex-wrap gap-5 justify-center">
                {candleProducts.map(renderProductItem)}
              </div>
              <div className="fixed bottom-10 right-10">
                <Cart totalProducts={total}></Cart>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

export default ProductScreen
