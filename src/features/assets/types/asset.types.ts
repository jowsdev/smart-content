export type AssetType =
  | 'image' | 'video' | 'audio' | 'font' | 'logo' | 'icon'
  | 'lottie' | 'subtitle' | 'json' | 'svg' | 'illustration'
  | 'document' | 'template' | 'custom';

export type AssetStatus = 'importing' | 'validating' | 'processing' | 'ready' | 'error' | 'archived';

export interface Asset {
  id: string;
  name: string;
  type: AssetType;
  format: string;
  size: number;
  checksum: string;
  status: AssetStatus;
  visibility: 'public' | 'private' | 'shared';
  favorite: boolean;
  createdAt: string;
  updatedAt: string;
  owner: string;
  projectId?: string;
  brandId?: string;
  collectionId?: string;
  thumbnail?: string;
  preview?: string;
  metadata: Record<string, any>;
  variants: string[]; // Variant IDs
  usage: string[]; // Usage reference IDs
  permissions: Record<string, any>;
  tags: string[];
}
