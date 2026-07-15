import type { Collection } from '../types/collection.types';
import { mockCollections } from '../data/mockCollections';

export const loadCollections = async (): Promise<Collection[]> => {
  await new Promise(resolve => setTimeout(resolve, 400));
  return mockCollections;
};

export const saveCollection = async (collection: Collection): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log('Collection saved (mock)', collection);
};
