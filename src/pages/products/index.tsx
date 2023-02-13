import products from '@/content/products.json'
// import Link from "next/link";

// const AllProductsPage = () => (
//   <div>
//     {products.map((x) => (
//       <Link key={x.id} href={`/products/${x.id}`}>
//         {x.name}
//       </Link>
//     ))}
//   </div>
// );

// export default AllProductsPage;
import Head from 'next/head'
import { Product } from '@/components/Product'
import { Candle } from '@/interfaces/candle.interface'
import { useProductStore } from '@/stores/productStore'
import { Cart } from '@/components/Cart'
import { NavBar } from '@/components/Nav'
import { ReactElement } from 'react'
import Layout from '@/layouts/layout'
import { GridProduct } from '@/components/GridProducts'

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

  return (
    <div className="overflow-scroll flex flex-col justify-center relative items-center">
      <div className="mt-[70px]">
        <GridProduct />
      </div>
      {/* <h1
        data-testid="header"
        className="text-[40px] py-14 w-full text-center font-medium"
      >
        Candle Products
      </h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {products.map(renderProductItem)}
      </div>
      <div className="fixed bottom-10 right-10">
        <Cart totalProducts={total}></Cart>
      </div> */}
    </div>
  )
}

ProductScreen.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default ProductScreen
