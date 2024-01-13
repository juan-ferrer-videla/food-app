import { Product } from "@/components/product";
import { products } from "@/lib/store";

export default function Home() {
  return (
    <>
      <h1>Restaurant</h1>
      <section>
        {Object.entries(products).map(([key, product]) => (
          <Product key={key} {...product} id={key as keyof typeof products} />
        ))}
      </section>
    </>
  );
}
