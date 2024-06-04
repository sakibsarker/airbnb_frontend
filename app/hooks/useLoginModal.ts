import { create } from "zustand";
interface LoginModalStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const userLoginModal = create<LoginModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default userLoginModal;
