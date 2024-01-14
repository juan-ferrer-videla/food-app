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
import { TProduct } from "@/lib/data";
import { Count, Decrement, Increment } from "./counter";
import { cn } from "@/lib/utils";

const Product: FC<TProduct & { className?: string }> = ({
  price,
  title,
  description,
  id,
  className,
}) => {
  return (
    <Card className={cn("max-w-screen-sm", className)}>
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
