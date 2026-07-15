import { useState, useEffect } from 'react';
import { GeneratedImage } from '../types/image.types';
import { mockGenerations } from '../data/mockGenerations';

export const useGeneratedImages = () => {
  const [images, setImages] = useState<GeneratedImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImages(mockGenerations);
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return { images, isLoading };
};
