import { create } from "zustand";
import { themeStoreT } from "..";

export const themeStore = create<themeStoreT>((set) => ({
  theme: "system",
  setTheme: (theme) => {
    set((state) => ({
      ...state,
      theme: theme,
    }));
  },
}));
