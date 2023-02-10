import Layout from '@/layouts/layout'
import '@/styles/globals.css'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/dist/shared/lib/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Scented Candles</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
