"use client";

import { useParams } from "next/navigation";
import { categories } from "@/constans";
import { Suspense } from "react";

export default function ShopDetailPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopDetailContent />
    </Suspense>
  );
}

function ShopDetailContent() {
  const { slug } = useParams(); // URL'den slug parametresini alıyoruz

  const project = categories.find((product) => product.href.includes(slug as string));

  if (!project) {
    return <div>Project Not Found</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
}