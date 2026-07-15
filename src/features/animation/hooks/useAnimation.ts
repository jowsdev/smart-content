import { useState, useCallback } from 'react';
import { Animation } from '../types/animation.types';

export const useAnimation = () => {
  const [animations, setAnimations] = useState<Animation[]>([]);

  const addAnimation = useCallback((animation: Animation) => {
    setAnimations(prev => [...prev, animation]);
  }, []);

  return { animations, addAnimation };
};
