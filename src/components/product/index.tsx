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
import { TProduct } from "@/lib/store";
import { Count, Decrement, Increment } from "./counter";

const Product: FC<TProduct> = ({ price, title, description, id }) => {
  return (
    <Card className="max-w-screen-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between">
        <span>{price}</span>
        <div className="flex items-center gap-x-2">
          <Decrement id={id} />
          <Count id={id} />
          <Increment id={id} />
        </div>
      </CardFooter>
    </Card>
  );
};

export { Product };
