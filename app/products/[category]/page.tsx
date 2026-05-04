import { notFound } from "next/navigation";
import { Suspense } from "react";
import {
  getAllProducts,
  categoryNames,
  categoryDescriptions,
  categoryToBrand,
} from "@/lib/data/products/utils";
import type { ProductCategory } from "@/lib/data/products/types";
import type { Metadata } from "next";
import ProductsClient from "@/app/products/ProductsClient";

export function generateStaticParams() {
  const products = getAllProducts();
  const categories = [...new Set(products.map((p) => p.category))];
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const catName = categoryNames[category as ProductCategory];
  if (!catName) return {};
  return {
    title: `${catName} | Athena Control`,
    description: categoryDescriptions[category as ProductCategory],
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (!categoryNames[category as ProductCategory]) notFound();

  const brand = categoryToBrand[category as ProductCategory];

  return (
    <Suspense>
      <ProductsClient
        initialFilters={{
          brand:       brand ?? "",
          category:    category,
          voltage:     "",
          application: "",
          industry:    "",
        }}
      />
    </Suspense>
  );
}

