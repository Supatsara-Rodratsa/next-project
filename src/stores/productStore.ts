import { create } from 'zustand'
import { Product } from '@/interfaces/product.interface'

type ProductStoreType = {
  allSelectedProducts: Map<string, number>
  total: number
  totalPrice: number
  addItem: (product: Product) => void
  removeItem: (product: Product) => void
  reset: () => void
}

function countAllProducts(selected: number[]) {
  let sum = 0
  for (const value of selected) {
    sum += value
  }
  return sum
}

function countTotalPrice(
  productPrice: number,
  currentTotal: number,
  isAddProduct: boolean
) {
  if (isAddProduct) {
    currentTotal += productPrice
  } else {
    currentTotal -= productPrice
  }
  return currentTotal
}

export const useProductStore = create<ProductStoreType>((set) => ({
  allSelectedProducts: new Map<string, number>(),
  total: 0,
  totalPrice: 0,
  removeItem: (product: Product) =>
    set((state) => {
      const currentQuantity = state.allSelectedProducts.get(product.id) || 0
      const updatedItems = new Map(state.allSelectedProducts)
      if (currentQuantity - 1 == 0 && updatedItems.has(product.id)) {
        updatedItems.delete(product.id)
      } else {
        updatedItems.set(product.id, Math.max(currentQuantity - 1, 0))
      }
      return {
        allSelectedProducts: updatedItems,
        total: countAllProducts(Array.from(updatedItems.values())),
        totalPrice: countTotalPrice(
          Number(product.price),
          state.totalPrice,
          false
        ),
      }
    }),

  addItem: (product: Product) => {
    set((state) => {
      const currentQuantity = state.allSelectedProducts.get(product.id) || 0
      const updatedItems = new Map(state.allSelectedProducts)
      updatedItems.set(product.id, currentQuantity + 1)
      return {
        allSelectedProducts: updatedItems,
        total: countAllProducts(Array.from(updatedItems.values())),
        totalPrice: countTotalPrice(
          Number(product.price),
          state.totalPrice,
          true
        ),
      }
    })
  },

  reset: () =>
    set({
      allSelectedProducts: new Map<string, number>(),
      total: 0,
      totalPrice: 0,
    }),
}))
