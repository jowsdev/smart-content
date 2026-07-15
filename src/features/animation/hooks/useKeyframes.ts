import { useState, useCallback } from 'react';
import { Keyframe } from '../types/keyframe.types';

export const useKeyframes = () => {
  const [keyframes, setKeyframes] = useState<Keyframe[]>([]);

  const updateKeyframe = useCallback((updated: Keyframe) => {
    setKeyframes(prev => prev.map(kf => kf.id === updated.id ? updated : kf));
  }, []);

  return { keyframes, updateKeyframe, setKeyframes };
};
