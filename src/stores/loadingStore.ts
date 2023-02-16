import { create } from 'zustand'

type LoadingStoreType = {
  isLoaded: boolean
  onLoaded: (load: boolean) => void
  reset: () => void
}

export const useLoadingStore = create<LoadingStoreType>((set) => ({
  isLoaded: false,
  onLoaded: (loaded: boolean) =>
    set(() => {
      return { isLoaded: loaded }
    }),
  reset: () =>
    set({
      isLoaded: false,
    }),
}))
