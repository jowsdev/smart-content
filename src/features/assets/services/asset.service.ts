import { Asset } from '../types/asset.types';

export const assetService = {
  loadAssets: async (): Promise<Asset[]> => {
    return [];
  },

  deleteAsset: async (id: string): Promise<void> => {
    console.log('Asset Service: Deleting', id);
  },

  duplicateAsset: async (id: string): Promise<Asset | null> => {
    console.log('Asset Service: Duplicating', id);
    return null;
  },

  moveAsset: async (id: string, collectionId: string): Promise<void> => {
    console.log(`Asset Service: Moving ${id} to ${collectionId}`);
  }
};
