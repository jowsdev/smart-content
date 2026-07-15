export interface BrandVariable {
  id: string;
  key: string;
  value: string;
  label: string;
  category: 'brand' | 'product' | 'service' | 'audience' | 'campaign' | 'custom';
}
