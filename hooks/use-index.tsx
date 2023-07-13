import { create } from 'zustand';

interface useIndexStore {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export const useIndex = create<useIndexStore>((set) => ({
  activeIndex: -1,
  setActiveIndex: (index: number) => set({ activeIndex: index }),
}));

