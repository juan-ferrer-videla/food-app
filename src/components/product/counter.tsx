"use client";

import React, { FC } from "react";
import { Button } from "../ui/button";
import { useStore } from "@/lib/store";

const Increment: FC<{
  id: string;
}> = ({ id }) => {
  const increment = useStore((state) => state.increment);
  const handleIncrement = () => increment(id);

  return <Button onClick={handleIncrement}>+</Button>;
};

const Decrement: FC<{
  id: string;
}> = ({ id }) => {
  const count = useStore(
    (state) => state.products.find((product) => id === product.id)?.count,
  );
  const decrement = useStore((state) => state.decrement);
  const handleDecrement = () => decrement(id);

  return (
    <Button disabled={count === 0} onClick={handleDecrement}>
      -
    </Button>
  );
};

const Count: FC<{
  id: string;
}> = ({ id }) => {
  const count = useStore(
    (state) => state.products.find((product) => id === product.id)?.count,
  );
  return <div className="px-2 font-semibold">{count}</div>;
};

export { Count, Increment, Decrement };
