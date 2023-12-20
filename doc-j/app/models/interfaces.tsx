export interface ProductImage {
  url: string;
  alt: string;
}
export interface Product {
  id: string;
  name: string;
  mainImage: ProductImage;
  description: string[] | string;
  images: ProductImage[];
  category: string;
}
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string[] | string;
  heroImage: string;
  heroImageAlt: string;
  logoImage: string;
  logoImageAlt: string;
  products: Product[];
}
