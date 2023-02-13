import { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { productId: 'product-1' } }],
    fallback: false, // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    // Passed to the page component as props
    props: { id: context.params?.productId },
  }
}

const Post = (props: any) => <pre>{JSON.stringify(props)}</pre>

export default Post
