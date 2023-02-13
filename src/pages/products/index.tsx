import { ReactElement } from 'react'
import Layout from '@/layouts/layout'
import { GridProduct } from '@/components/GridProducts'
function ProductScreen() {
  return (
    <div className="overflow-scroll flex flex-col justify-center relative items-center">
      <div className="mt-[70px]">
        <GridProduct />
      </div>
    </div>
  )
}

ProductScreen.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default ProductScreen
