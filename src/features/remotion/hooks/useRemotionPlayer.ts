import { useState, useCallback } from 'react';
import { PlayerManager } from '../player/PlayerManager';

export const useRemotionPlayer = () => {
  const [player] = useState(() => new PlayerManager());
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = useCallback(() => {
    if (isPlaying) player.pause();
    else player.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying, player]);

  const seek = useCallback((frame: number) => {
    player.seek(frame);
  }, [player]);

  return {
    isPlaying,
    togglePlay,
    seek,
  };
};
