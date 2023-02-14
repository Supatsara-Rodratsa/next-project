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

export interface ProductItemProp extends Product {
  onClick?: () => void
}
