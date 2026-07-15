import { useState, useCallback } from 'react';
import { Layer } from '../types/layer.types';

export const useSceneLayers = (initialLayers: Layer[] = []) => {
  const [layers, setLayers] = useState<Layer[]>(initialLayers);

  const addLayer = useCallback((layer: Layer) => {
    setLayers(prev => [...prev, layer]);
  }, []);

  const updateLayer = useCallback((id: string, updates: Partial<Layer>) => {
    setLayers(prev => prev.map(l => l.id === id ? { ...l, ...updates } : l));
  }, []);

  return { layers, addLayer, updateLayer };
};
