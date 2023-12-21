import { create } from 'zustand'

interface NavbarHide {
    setIsNavbarHidden: () => void
    isNavbarHidden: boolean,
    setIsInViewHero: (state: boolean) => void,
    isInViewHero: boolean,
    setIsScrollUp: (state: boolean) => void
    isScrollUp: boolean
}


export const useStore = create<NavbarHide>((set) => ({
    isNavbarHidden: false,
    setIsInViewHero: (val) => set(() => ({ isInViewHero: val })),
    isInViewHero: false,
    setIsNavbarHidden: () => set((state) => ({ isNavbarHidden: !state.isScrollUp && !state.isInViewHero })),
    isScrollUp: false,
    setIsScrollUp: (val) => set(() => ({ isScrollUp: val }))
}))