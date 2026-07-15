import { useState, useCallback } from 'react';
import { Timeline } from '../types/timeline.types';
import { mockTimeline } from '../data/mockTimeline';

export const useTimeline = () => {
  const [timeline, setTimeline] = useState<Timeline>(mockTimeline);

  const setZoom = useCallback((zoom: number) => {
    setTimeline(prev => ({ ...prev, zoom }));
  }, []);

  const setCurrentFrame = useCallback((frame: number) => {
    setTimeline(prev => ({ ...prev, currentTimeInFrames: frame }));
  }, []);

  return {
    timeline,
    setZoom,
    setCurrentFrame,
  };
};
