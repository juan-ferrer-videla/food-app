"use client";

import { useStore } from "@/lib/store";
import React from "react";

export const Total = () => {
  const products = useStore((state) => state.products);
  const total = products.reduce(
    (acc, { count, price }) => acc + count * price,
    0,
  );

  return <div>{total}</div>;
};
