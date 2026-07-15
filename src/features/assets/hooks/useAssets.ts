import { useState, useEffect } from 'react';
import { Asset } from '../types/asset.types';
import { mockAssets } from '../data/mockAssets';

export const useAssets = () => {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAssets(mockAssets);
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return { assets, isLoading };
};
