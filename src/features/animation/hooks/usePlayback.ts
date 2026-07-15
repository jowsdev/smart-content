import { useState, useCallback } from 'react';

export const usePlayback = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  return { isPlaying, togglePlay };
};
