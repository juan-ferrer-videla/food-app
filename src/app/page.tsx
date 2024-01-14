import { Product } from "@/components/product";
import { Total } from "@/components/product/total";
import { products } from "@/lib/store";

export default function Home() {
  return (
    <>
      <h1>Restaurant</h1>
      <section>
        <h2>Entrada</h2>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </section>
      <Total />
    </>
  );
}
