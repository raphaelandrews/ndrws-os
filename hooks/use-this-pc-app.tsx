import { create } from 'zustand';

import { useAppStore } from '@/types';

export const useThisPcApp = create<useAppStore>((set) => ({
  isOpen: false,
  isMinimized: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
  onMinimize: () => set((state) => ({ isMinimized: !state.isMinimized })),
}));