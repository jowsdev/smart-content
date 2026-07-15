import { useState, useCallback } from 'react';
import { MixerState } from '../types/mixer.types';

export const useAudioMixer = () => {
  const [state, setState] = useState<MixerState>({
    tracks: {},
    masterVolume: 100,
    limiter: true,
    normalization: false,
  });

  const updateTrackVolume = useCallback((trackId: string, volume: number) => {
    setState(prev => ({
      ...prev,
      tracks: { ...prev.tracks, [trackId]: { ...prev.tracks[trackId], volume } }
    }));
  }, []);

  return { state, updateTrackVolume };
};
