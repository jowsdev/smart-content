import { useState, useCallback } from 'react';
import { Scene } from '../types/scene.types';

export const useScene = (initialScene: Scene | null = null) => {
  const [scene, setScene] = useState<Scene | null>(initialScene);

  const updateScene = useCallback((updates: Partial<Scene>) => {
    setScene(prev => prev ? { ...prev, ...updates } : null);
  }, []);

  return { scene, updateScene };
};
