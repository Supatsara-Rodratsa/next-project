import { GetStaticPaths, GetStaticProps } from 'next'
import products from '@/content/products.json'
import { Product } from '@/interfaces/product.interface'
import Image from 'next/image'
import Layout from '@/layouts/layout'
import { ReactElement } from 'react'
import { Button } from '@/components/Button'
import { useProductStore } from '@/stores/productStore'
import { motion } from 'framer-motion'

export const getStaticPaths: GetStaticPaths = async () => {
  const allProductId = products
    .filter((product) => product.id.includes('product'))
    .map((item) => {
      return { params: { productId: item.id } }
    })
  return {
    paths: allProductId,
    fallback: false, // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async (context) => {
  const item = products.find(
    (product) => product.id === context.params?.productId
  )
  return {
    // Passed to the page component as props
    props: { ...item },
  }
}

const ProductDetail = (props: Product) => {
  const allSelectedProducts = useProductStore((x) => x.allSelectedProducts)
  const addItem = useProductStore((x) => x.addItem)
  const removeItem = useProductStore((x) => x.removeItem)
  const renderProductImage = (image: string, index: number) => (
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      key={index}
      className={`object-cover ${
        index % 2 == 0 ? 'rounded-tl-[70px]' : 'rounded-br-[70px]'
      } w-[300px] tablet:w-[200px] mobile:w-[150px]`}
      src={image}
      alt="image"
      width="0"
      height="0"
    />
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-screen px-[60px] absolute top-[50%] right-[50%] pos-center mobile:mt-[100px]"
    >
      <div className="flex justify-center items-start h-full gap-4 tablet:flex-wrap mobile:flex-wrap">
        {props.image.map((item: string, index: number) =>
          renderProductImage(item, index)
        )}
        <div className="flex flex-col justify-between items-center h-auto w-full self-stretch">
          <div className="flex flex-col gap-5 w-[100%] ml-7 tablet:mt-7 tablet:ml-0">
            <div className="uppercase text-2xl font-bold">
              <span className="text-green">{props.name}</span>
              {props.isHairTreatment ? ' - Hair Treatment' : ' - Shower Cream'}
            </div>
            <p className="flex flex-wrap">{props.description}</p>
            <div className="flex justify-between mt-3">
              <p className="font-bold text-xl">Price</p>
              <p className="text-xl">{props.price} Euro</p>
            </div>
          </div>
          <div className="flex gap-6 mb-10 items-center">
            <Button
              label="-"
              isCircle
              onClick={() => removeItem({ ...props })}
            ></Button>
            <p className="text-xl">{allSelectedProducts.get(props.id) || 0}</p>
            <Button
              label="+"
              isCircle
              onClick={() => addItem({ ...props })}
            ></Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

ProductDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default ProductDetail
