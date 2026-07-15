export interface AssetCollection {
  id: string;
  parentId?: string;
  name: string;
  description?: string;
  assetIds: string[];
  createdAt: string;
  updatedAt: string;
}
