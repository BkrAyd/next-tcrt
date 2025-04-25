"use client";

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
import ProductModal from "./ProductModal";
import { toast } from "sonner";

interface ProductItemProps {
  product: ProductType;
}
const ProductItem = ({ product }: ProductItemProps) => {

  const handleAddToCart = () => {
    toast("Event has been created.",{
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Geri al",
        onClick: () => console.log("Undo"),
      },
    })
    
  };


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
          <ProductModal product={product} />
          <Button variant="default" className="bg-black text-white cursor-pointer"
          onClick={handleAddToCart}>
            Add to Cart
          </Button>
         
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductItem;
