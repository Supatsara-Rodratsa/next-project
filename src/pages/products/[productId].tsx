import { GetStaticPaths, GetStaticProps } from 'next'
import products from '@/content/products.json'

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

const ProductDetail = (props: any) => <pre>{JSON.stringify(props)}</pre>

export default ProductDetail
