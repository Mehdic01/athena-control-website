import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getAllProducts, brandNames } from "@/lib/data/products/utils";
import type { Brand } from "@/lib/data/products/types";
import type { Metadata } from "next";
import ProductsClient from "@/app/products/ProductsClient";

export function generateStaticParams() {
  const products = getAllProducts();
  const brands = [...new Set(products.map((p) => p.brand))] as Brand[];
  return brands.map((brand) => ({ brand }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string }>;
}): Promise<Metadata> {
  const { brand } = await params;
  const name = brandNames[brand as Brand];
  if (!name) return {};
  return {
    title: `${name} Products | Athena Control`,
    description: `Browse all ${name} products available through Athena Control, official distributor in Turkey.`,
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand } = await params;

  if (!brandNames[brand as Brand]) notFound();

  return (
    <Suspense>
      <ProductsClient
        initialFilters={{
          brand:       brand,
          category:    "",
          voltage:     "",
          application: "",
          industry:    "",
        }}
      />
    </Suspense>
  );
}
