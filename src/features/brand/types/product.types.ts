export interface Product {
  id: string;
  name: string;
  description: string;
  price: string | number;
  features: string[];
  benefits: string[];
  category: string;
  tags: string[];
  metadata: Record<string, any>;
}

export interface BrandService extends Product {}
