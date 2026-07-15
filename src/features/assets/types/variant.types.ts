export interface AssetVariant {
  id: string;
  assetId: string;
  type: 'original' | 'thumbnail' | 'preview' | 'low-res' | 'high-res' | 'square' | 'portrait' | 'landscape';
  url: string;
  width?: number;
  height?: number;
  size: number;
  format: string;
}
