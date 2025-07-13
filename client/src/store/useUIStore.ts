import { create } from "zustand";

interface UIState {
    searchOpen: boolean;
    gridMenuOpen: boolean;
    worldMenuOpen: boolean;
    cartMenuOpen: boolean;
    toggleSearch: () => void;
    toggleGridMenu: () => void;
    toggleWorldMenu: () => void;
    toggleCartMenu: () => void;
    closeAll: () => void;
}

export const useUIStore = create<UIState>((set, get) => ({
    searchOpen: false,
    gridMenuOpen: false,
    worldMenuOpen: false,
    cartMenuOpen: false, // ✅

    toggleSearch: () => {
        const { searchOpen } = get();
        set({
            searchOpen: !searchOpen,
            gridMenuOpen: false,
            worldMenuOpen: false,
            cartMenuOpen: false,
        });
    },

    toggleGridMenu: () => {
        const { gridMenuOpen } = get();
        set({
            gridMenuOpen: !gridMenuOpen,
            searchOpen: false,
            worldMenuOpen: false,
            cartMenuOpen: false,
        });
    },

    toggleWorldMenu: () => {
        const { worldMenuOpen } = get();
        set({
            worldMenuOpen: !worldMenuOpen,
            gridMenuOpen: false,
            searchOpen: false,
            cartMenuOpen: false,
        });


    },

    toggleCartMenu: () => {
        const { cartMenuOpen } = get();
        set({
            cartMenuOpen: !cartMenuOpen,
            gridMenuOpen: false,
            searchOpen: false,
            worldMenuOpen: false,
        });
    },

    closeAll: () => set({
        searchOpen: false,
        gridMenuOpen: false,
        worldMenuOpen: false,
        cartMenuOpen: false,
    }),
}));
