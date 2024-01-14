import { create } from "zustand";

export type TProduct = {
  title: string;
  price: number;
  description: string;
  count: number;
  id: string;
};

interface ArrStore {
  products: TProduct[];
}

export const products = [
  {
    title: "Milanesas",
    count: 0,
    description: "con papas a caballo",
    id: "1",
    price: 300,
  },
  {
    title: "Huevos",
    count: 0,
    description: "a la pochineta aslkdjasldjao",
    id: "2",
    price: 700,
  },
  {
    title: "Milanesovich",
    count: 0,
    description: "con merluza a la parmesana",
    id: "3",
    price: 2300,
  },
];

type ArrActions = {
  increment: (id: string) => void;
  decrement: (id: string) => void;
};

export const useStore = create<ArrStore & ArrActions>((set) => ({
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
