
export interface CarProduct {
  _id: string;        
  make: string;      
  carModel: string;  
  year: number;      
  title: string;    
  price: number;   
  oldPrice?: number;  
  discountBtn?: string; 
  description?: string;
  rating?: number;    
  image: string;     
  hoverImage?: string; 
  isFeatured?: boolean;
}
