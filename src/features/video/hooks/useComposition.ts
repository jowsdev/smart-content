import { useState } from 'react';
import { Composition } from '../types/composition.types';

export const useComposition = (initialComposition?: Composition) => {
  const [composition, setComposition] = useState<Composition | null>(initialComposition || null);

  const updateComposition = (updates: Partial<Composition>) => {
    if (!composition) return;
    setComposition({ ...composition, ...updates, updatedAt: new Date().toISOString() });
  };

  return {
    composition,
    updateComposition,
  };
};
