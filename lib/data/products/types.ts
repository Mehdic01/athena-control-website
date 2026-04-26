// ─── Core Types ───────────────────────────────────────────

export type Brand = "motortronics" | "renle" | "shinkawa" | "athena-valve" | "valentech";

export type ProductCategory =
  | "soft-starter"
  | "frequency-inverter"
  | "vibration-sensors"
  | "condition-monitor"
  | "ball-valve"
  | "butterfly-valve"
  | "gate-valve"
  | "globe-valve"
  | "check-valve"
  | "plug-valve"
  | "pneumatic-actuator"
  | "electric-actuator"
  | "complete-actuator-equipment";

export type Spec = {
  label: string;
  value: string;
};

export type SpecGroup = {
  title: string;
  specs: Spec[];
};

export type Document = {
  name: string;
  type: "catalog" | "datasheet" | "manual" | "brochure" | "case study" | "software" | "firmware" ;
  url: string;  // path to PDF in public/
};

export type Feature = {
  title: string;
  description: string;
};

export type ProductImage = {
  src: string;
  alt: string;
};

// ─── Main Product Type ────────────────────────────────────

export type Product = {
  // Identity
  slug: string;
  name: string;
  brand: Brand;
  category: ProductCategory;
  subcategory?: string;  // "low-voltage", "high-voltage" etc.

  // Content
  shortDescription: string;  // 1-2 sentence summary
  overview: string[];            // paragraflar halinde detaylı açıklama
  features?: Feature[];           // madde madde özellikler
  applications?: string[];    // bu ürünün kullanıldığı yerler

  // Specs
  quickSpecs?: Spec[];        // kart üzerinde 3-5 göz atmalık
  specGroups?: SpecGroup[];  // detaylı teknik özellikler (opsiyonel, detay sayfası için)

  // Media
  image: string;             // birincil ürün resmi
  gallery?: ProductImage[];  // ek resimler

  // Resources
  documents?: Document[];
  manufacturerUrl?: string;  // orijinal üretici sayfasına bağlantı

  // Meta
  featured?: boolean;        // ana sayfa veya kategori sayfasında göster
  order?: number;            // kategori içindeki sıralama

  keyProduct?: boolean;       // bu ürün, kategorisindeki en önemli modellerden biri mi? (kategori sayfasında öne çıkarma için)
};

// ─── Series Type (groups products) ────────────────────────

export type ProductSeries = {
  slug: string;
  name: string;
  brand: Brand;
  category: ProductCategory;
  subcategory?: string;
  description: string;
  image?: string;
  products: Product[];       // bu serideki bireysel modeller
};