import { Suspense } from "react";
import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products | Athena Control",
  description:
    "Complete industrial product catalog: Motortronics soft starters, SHINKAWA Electric vibration monitoring systems, and RENLE frequency inverters. Official Turkish distributor.",
};

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsClient />
    </Suspense>
  );
}
