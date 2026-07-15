import { useState, useCallback } from 'react';

export const useTTS = () => {
  const [isSynthesizing, setIsSynthesizing] = useState(false);

  const synthesize = useCallback(async (text: string, voiceId: string) => {
    setIsSynthesizing(true);
    console.log(`Hook: Synthesizing ${text} with ${voiceId}`);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSynthesizing(false);
    return 'audio_url';
  }, []);

  return { synthesize, isSynthesizing };
};
