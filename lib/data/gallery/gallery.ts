export interface GalleryImage {
  src: string;
  alt: string;
  /** Optional aspect-ratio hint for masonry layout decisions */
  wide?: boolean;
}

export const galleryImages: GalleryImage[] = [
  { src: "/images/gallery/photo-1.jpg",       alt: "Athena Control — installation" },
  { src: "/images/gallery/photo-3.jpg",       alt: "Industrial application" },
  { src: "/images/gallery/photo-5.jpg",       alt: "Motor control system" },
  { src: "/images/gallery/photo-7.jpg",       alt: "Field installation" },
  { src: "/images/gallery/photo-9.jpg",       alt: "Technical showcase" },
  { src: "/images/gallery/photo-10.jpg",      alt: "Engineering excellence" },
  { src: "/images/gallery/photo-13.jpg",      alt: "Product range" },
  { src: "/images/gallery/photo-14.jpg",      alt: "Athena Control team" },
  { src: "/images/gallery/win-eurasia.webp",  alt: "WIN Eurasia exhibition", wide: true },
];
