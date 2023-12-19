import { create } from "zustand";

type menuState = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

export const useMenuStore = create<menuState>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({ isOpen }),
}));

