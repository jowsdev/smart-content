import { useState, useCallback } from 'react';
import { Caption } from '../types/caption.types';

export const useCaptions = () => {
  const [captions, setCaptions] = useState<Caption[]>([]);

  const addCaption = useCallback((caption: Caption) => {
    setCaptions(prev => [...prev, caption]);
  }, []);

  const updateCaption = useCallback((id: string, updates: Partial<Caption>) => {
    setCaptions(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c));
  }, []);

  return { captions, addCaption, updateCaption };
};
