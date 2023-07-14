import { create } from 'zustand';

import { useAppStore } from '@/types';

export const useProjectsApp = create<useAppStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));