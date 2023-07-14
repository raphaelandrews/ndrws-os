import { create } from 'zustand';

interface useZIndexStore {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export const useZIndex = create<useZIndexStore>((set) => ({
  activeIndex: -1,
  setActiveIndex: (index: number) => set({ activeIndex: index }),
}));

