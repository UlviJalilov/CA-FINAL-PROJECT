export interface FeaturedProduct {
  _id: string;
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

}
