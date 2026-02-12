import { create } from 'zustand'

type Store = {
  ofertas: any
  setOfertas: (ofertas:any) => void
}

export const useStore = create<Store>()((set) => ({
    ofertas: [],
    setOfertas: (ofertas: any) => set((state) => ({ ofertas: ofertas })),
}))
