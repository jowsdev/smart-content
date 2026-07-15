import { useState, useEffect } from 'react';
import type { Collection } from '../types/collection.types';
import * as collectionService from '../services/collection.service';

export const useCollections = () => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const data = await collectionService.loadCollections();
        setCollections(data);
      } catch (err) {
        console.error('Failed to load collections', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  return { collections, loading };
};
