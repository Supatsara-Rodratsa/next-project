import { create } from 'zustand'
import Products from '@/content/products.json'

type ProductStoreType = {
  allSelectedProducts: Map<string, number>
  total: number
  totalPrice: number
  addItem: (id: string) => void
  removeItem: (id: string) => void
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
  selectedId: string,
  currentTotal: number,
  isAddProduct: boolean
) {
  const product = Products.find((item) => item.id === selectedId) || null
  if (product && product.price) {
    if (isAddProduct) {
      currentTotal += product.price
    } else {
      currentTotal -= product.price
    }
  }
  return currentTotal
}

export const useProductStore = create<ProductStoreType>((set) => ({
  allSelectedProducts: new Map<string, number>(),
  total: 0,
  totalPrice: 0,
  removeItem: (id: string) =>
    set((state) => {
      const currentQuantity = state.allSelectedProducts.get(id) || 0
      const updatedItems = new Map(state.allSelectedProducts)
      if (currentQuantity - 1 == 0 && updatedItems.has(id)) {
        updatedItems.delete(id)
      } else {
        updatedItems.set(id, Math.max(currentQuantity - 1, 0))
      }
      return {
        allSelectedProducts: updatedItems,
        total: countAllProducts(Array.from(updatedItems.values())),
        totalPrice: countTotalPrice(id, state.totalPrice, false),
      }
    }),

  addItem: (id: string) => {
    set((state) => {
      const currentQuantity = state.allSelectedProducts.get(id) || 0
      const updatedItems = new Map(state.allSelectedProducts)
      updatedItems.set(id, currentQuantity + 1)
      return {
        allSelectedProducts: updatedItems,
        total: countAllProducts(Array.from(updatedItems.values())),
        totalPrice: countTotalPrice(id, state.totalPrice, true),
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
