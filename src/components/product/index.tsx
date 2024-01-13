"use client";

import React, { type FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/types";
import { type ProductsState, useProductsStore } from "@/lib/store";

const Product: FC<{
  title: string;
  price: number;
  description: string;
  id: keyof ProductsState;
}> = ({ price, title, description, id }) => {
  const count = useProductsStore((state) => state[id].count);
  const increment = useProductsStore((state) => state.increment);
  const handleIncrement = () => {
    increment(id);
  };

  return (
    <Card className="max-w-screen-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {!!description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between">
        <Button>-</Button>
        <p>{count}</p>
        <Button onClick={handleIncrement}>+</Button>
      </CardFooter>
    </Card>
  );
};

export { Product };
