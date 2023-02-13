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
  image: string
  name: string
  isHairTreatment?: boolean
  price?: number
  isProduct: boolean
}
