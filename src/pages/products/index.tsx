import { ReactElement } from 'react'
import Layout from '@/layouts/layout'
import { GridProduct } from '@/components/GridProducts'
import { motion } from 'framer-motion'
function ProductScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="overflow-scroll flex flex-col justify-center relative items-center"
    >
      <div className="mt-[70px]">
        <GridProduct />
      </div>
    </motion.div>
  )
}

ProductScreen.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default ProductScreen
