import { useState, useCallback } from 'react';
import { ImageRequest } from '../types/generation.types';
import { GeneratedImage } from '../types/image.types';

export const useImageGeneration = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generate = useCallback(async (_request: ImageRequest) => {
    setIsGenerating(true);
    setError(null);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      return [];
    } catch (e: any) {
      setError(e.message);
      return [];
    } finally {
      setIsGenerating(false);
    }
  }, []);

  return { generate, isGenerating, error };
};
