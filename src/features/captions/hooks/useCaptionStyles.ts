import { useState, useEffect } from 'react';
import { CaptionStyle } from '../types/style.types';

export const useCaptionStyles = () => {
  const [styles, setStyles] = useState<CaptionStyle[]>([]);

  useEffect(() => {
    // Simulated loading of styles
    setStyles([]);
  }, []);

  return { styles };
};
