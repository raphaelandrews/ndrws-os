import { create } from 'zustand';

interface useAboutAppProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useAboutApp = create<useAboutAppProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));