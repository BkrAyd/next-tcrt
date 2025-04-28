"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}

function SearchContent() {
  const searchParams = useSearchParams(); // URL'deki query parametrelerini alıyoruz
  const query = searchParams.get("q");

  return (
    <div>
      <h1>Search Results</h1>
      <p>Query: {query}</p>
    </div>
  );
}