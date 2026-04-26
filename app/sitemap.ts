import { MetadataRoute } from "next";
import { getAllProducts } from "@/lib/data/products/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://athena-control.com";
  const products = getAllProducts();

  // /products/[category]
  const categories = [...new Set(products.map((p) => p.category))];
  const categoryPages = categories.map((category) => ({
    url: `${base}/products/${category}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // /products/[category]/[slug]
  const productPages = products.map((p) => ({
    url: `${base}/products/${p.category}/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: base,                lastModified: new Date(), changeFrequency: "monthly", priority: 1   },
    { url: `${base}/about`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products`,  lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    ...categoryPages,
    ...productPages,
    { url: `${base}/brands`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/gallery`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/contact`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
