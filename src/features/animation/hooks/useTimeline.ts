import { useState, useCallback } from 'react';

export const useTimeline = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [zoom, setZoom] = useState(1);

  const seek = useCallback((frame: number) => {
    setCurrentFrame(frame);
  }, []);

  return { currentFrame, seek, zoom, setZoom };
};
