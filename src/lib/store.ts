import { create } from "zustand";

const createProduct = ({
  title,
  description,
  price,
}: {
  title: string;
  description: string;
  price: number;
}) => ({
  title,
  description,
  price,
  count: 0,
});

export const products = {
  milanesas: createProduct({
    title: "Milanesas",
    description: "Milanesas con papas fritas a caballo",
    price: 400,
  }),
  huevos: createProduct({
    title: "Milanesas",
    description: "Milanesas con papas fritas a caballo",
    price: 400,
  }),
};

export type ProductsState = typeof products;
type Action = {
  increment: (name: keyof ProductsState) => void;
  decrement: (name: keyof ProductsState) => void;
};

export const useProductsStore = create<ProductsState & Action>()((set) => ({
  ...products,
  increment: (productId) => {
    set((state) => ({
      [productId]: { ...state[productId], count: state[productId].count + 1 },
    }));
  },
  decrement: (productId) => {
    set((state) => ({
      [productId]: { ...state[productId], count: state[productId].count - 1 },
    }));
  },
}));
