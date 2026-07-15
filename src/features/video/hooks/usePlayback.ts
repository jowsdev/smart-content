import { useState, useCallback } from 'react';

export const usePlayback = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);

  const togglePlay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const seek = useCallback((frame: number) => {
    setCurrentFrame(frame);
  }, []);

  return {
    isPlaying,
    currentFrame,
    togglePlay,
    seek,
  };
};
