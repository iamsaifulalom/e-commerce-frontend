import { create } from 'zustand'

interface SideBarState {
  isOpen: boolean
  toggle: () => void
}

export const useSideBarToggle = create<SideBarState>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))
