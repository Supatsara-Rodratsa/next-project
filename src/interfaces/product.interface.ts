import { Product } from '@/components/Product'

export interface Candle {
  name: string
  price: number
  image: string
}

export interface LoadingImage {
  id: string
  image: string
}

export interface Product {
  id: string
  image: Array<string>
  name: string
  isHairTreatment?: boolean
  price?: number
  isProduct: boolean
  description?: string
}

export interface ProductImageProp extends Product {
  onClick?: () => void
}
