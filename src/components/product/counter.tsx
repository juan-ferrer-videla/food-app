"use client";

import React, { FC } from "react";
import { Button } from "../ui/button";
import { ProductsState, useProductsStore } from "@/lib/store";

const Increment: FC<{
  id: keyof ProductsState;
}> = ({ id }) => {
  const increment = useProductsStore((state) => state.increment);
  const handleIncrement = () => increment(id);

  return <Button onClick={handleIncrement}>+</Button>;
};

const Decrement: FC<{
  id: keyof ProductsState;
}> = ({ id }) => {
  const count = useProductsStore((state) => state[id].count);
  const decrement = useProductsStore((state) => state.decrement);
  const handleDecrement = () => decrement(id);

  return (
    <Button disabled={count === 0} onClick={handleDecrement}>
      -
    </Button>
  );
};

const Count: FC<{
  id: keyof ProductsState;
}> = ({ id }) => {
  const count = useProductsStore((state) => state[id].count);
  return <div className="px-2 font-semibold">{count}</div>;
};

export { Count, Increment, Decrement };
