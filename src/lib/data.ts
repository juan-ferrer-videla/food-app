export type TGroup = "Plato principal" | "Entrada";

export type TProduct = {
  title: string;
  price: number;
  description: string;
  count: number;
  id: string;
  group: string;
};

const productFactory = () => {
  let counter = 0;

  return (
    title: string,
    description: string,
    price: number,
    group: TGroup,
  ): TProduct => {
    counter++;
    return {
      title,
      description,
      price,
      count: 0,
      id: `product-${counter}`,
      group,
    };
  };
};

const createProduct = productFactory();

export const products = [
  createProduct("Milanesas", "con papas a caballo", 300, "Entrada"),
  createProduct("Huevos", "a la pochineta", 400, "Entrada"),
  createProduct(
    "Milanesovich",
    "con merluza a la parmesana",
    700,
    "Plato principal",
  ),
];

export const createGroup = (group: TGroup) =>
  products.filter((product) => group === product.group);
