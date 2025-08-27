export interface FeaturedProduct {
  _id: string;
  slug: string;
  title: string;
  price: number;
  oldPrice?: number;
  discountBtn?: string;
  discountPercent?: number;
  description?: string;
  rating: number;
  image: string;
  hoverImage?: string;
  isFeatured: boolean;
  gallery?: string[];
  category?: string;
  inStock: boolean;
  make?: string;
  carModel?: string;
  year?: string | number;
  type: string;

}
