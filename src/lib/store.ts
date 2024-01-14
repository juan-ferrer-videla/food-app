import { create } from "zustand";
import { type TProduct, products } from "./data";

interface Store {
  products: TProduct[];
}

type Actions = {
  increment: (id: string) => void;
  decrement: (id: string) => void;
};

export const useStore = create<Store & Actions>((set) => ({
  products,
  increment: (id: string) => {
    set((state) => ({
      products: [...state.products].map((product) =>
        product.id === id ? { ...product, count: product.count + 1 } : product,
      ),
    }));
  },
  decrement: (id: string) => {
    set((state) => ({
      products: [...state.products].map((product) =>
        product.id === id ? { ...product, count: product.count - 1 } : product,
      ),
    }));
  },
}));
