import { Product } from "@/components/product";
import { Total } from "@/components/product/total";
import { createGroup, products } from "@/lib/data";

export default function Home() {
  const entrada = createGroup("Entrada");
  const platoPrincipal = createGroup("Plato principal");

  return (
    <>
      <h1>Restaurant</h1>
      <section>
        <h2>Entrada</h2>
        {entrada.map((product) => (
          <Product key={product.id} {...product} className="mb-3" />
        ))}
        <h2>Plato Principal</h2>
        {platoPrincipal.map((product) => (
          <Product key={product.id} {...product} className="mb-3" />
        ))}
      </section>
      <Total />
    </>
  );
}
