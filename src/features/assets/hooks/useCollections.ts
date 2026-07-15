import { useState, useEffect } from 'react';
import { AssetCollection } from '../types/collection.types';
import { mockCollections } from '../data/mockCollections';

export const useCollections = () => {
  const [collections, setCollections] = useState<AssetCollection[]>([]);

  useEffect(() => {
    setCollections(mockCollections);
  }, []);

  return { collections };
};
