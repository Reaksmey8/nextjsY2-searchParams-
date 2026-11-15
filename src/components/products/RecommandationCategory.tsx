"use client";

import { useEffect, useState } from "react";
import { ProductCardComponent, ProductResponse } from "./ProductCardComponent";

type CategoryType = {
  category: string;
};

export default function RecommenDationProduct({ category }: CategoryType) {
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!category) return;

    async function fetchRecommandationCategory() {
      try {
        setLoading(true);
        const response = await fetch(`/api/products/category/${category}`);
        const data = await response.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching recommendation products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRecommandationCategory();
  }, [category]);

  console.log("-------> Product from Category: ", products);

  if (!category) return null;

  return (
    <section className="my-8 space-y-4">
      <h2 className="text-xl font-bold tracking-tight">Recommandation Products</h2>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-72 rounded-2xl bg-muted/50 animate-pulse border"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((pro) => (
            <ProductCardComponent
              key={pro.id ?? pro.title}
              id={pro.id}
              images={pro.images}
              title={pro.title}
              description={pro.description}
              price={pro.price}
            />
          ))}
        </div>
      )}
    </section>
  );
}
