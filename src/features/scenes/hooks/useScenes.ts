import { useState, useEffect } from 'react';
import { Scene } from '../types/scene.types';

export const useScenes = () => {
  const [scenes] = useState<Scene[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulated loading
    setIsLoading(false);
  }, []);

  return { scenes, isLoading };
};
