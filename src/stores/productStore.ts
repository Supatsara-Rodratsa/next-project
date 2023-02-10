import { create } from 'zustand'

type ProductStoreType = {
  allSelectedProducts: Map<string, number>
  total: number
  addItem: (name: string) => void
  removeItem: (name: string) => void
  reset: () => void
}

export const useProductStore = create<ProductStoreType>((set) => ({
  allSelectedProducts: new Map<string, number>(),
  total: 0,
  removeItem: (name: string) =>
    set((state) => {
      const currentQuantity = state.allSelectedProducts.get(name) || 0
      const updatedItems = new Map(state.allSelectedProducts)
      updatedItems.set(name, Math.max(currentQuantity - 1, 0))
      let sum = 0
      for (const value of Array.from(updatedItems.values())) {
        sum += value
      }
      return {
        allSelectedProducts: updatedItems,
        total: sum,
      }
    }),

  addItem: (name: string) => {
    set((state) => {
      const currentQuantity = state.allSelectedProducts.get(name) || 0
      const updatedItems = new Map(state.allSelectedProducts)
      updatedItems.set(name, currentQuantity + 1)
      let sum = 0
      for (const value of Array.from(updatedItems.values())) {
        sum += value
      }

      return {
        allSelectedProducts: updatedItems,
        total: sum,
      }
    })
  },

  reset: () =>
    set({ allSelectedProducts: new Map<string, number>(), total: 0 }),
}))
