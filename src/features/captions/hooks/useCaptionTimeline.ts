import { useState, useCallback } from 'react';

export const useCaptionTimeline = () => {
  const [currentTimeMs, setCurrentTimeMs] = useState(0);
  const [zoom, setZoom] = useState(1);

  const seek = useCallback((timeMs: number) => {
    setCurrentTimeMs(timeMs);
  }, []);

  return { currentTimeMs, seek, zoom, setZoom };
};
