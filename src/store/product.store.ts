import { create } from "zustand";
import { tproduct, tproductStore } from "..";

export const productStore = create<tproductStore>((set) => ({
  products: [],
  filtered: [],
  setFiltered: (value: tproduct[]) => {
    set((state) => ({
      ...state,
      filtered: value,
    }));
  },
  setProducts: (value: tproduct[]) => {
    set((state) => ({
      ...state,
      products: value,
    }));
  },
}));
