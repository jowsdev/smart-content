import { useState, useEffect } from 'react';
import { Voice } from '../types/voice.types';

export const useVoices = () => {
  const [voices, setVoices] = useState<Voice[]>([]);

  useEffect(() => {
    // Simulated loading
    setVoices([]);
  }, []);

  return { voices };
};
