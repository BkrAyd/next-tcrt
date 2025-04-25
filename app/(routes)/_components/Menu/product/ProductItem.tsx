import { ProductType } from "@/constans";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ProductItemProps {
  product: ProductType;
}
const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{product.title}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image alt={product.title} src={product.image} width={500} height={500} 
          className="w-full mb-4 rounded-xl"/>
            <div className="flex justify-between items-center">
                <span className="text-lg font-bold">${product.price}</span>
                <span className="text-lg font-bold line-through">${product.mrp}</span>
            </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button variant="destructive" className="bg-red-500 text-white cursor-pointer">
            Detail
          </Button>
          <Button variant="default" className="bg-black text-white cursor-pointer">
            Add to Cart
          </Button>
         
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductItem;
