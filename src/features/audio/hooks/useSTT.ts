import { useState, useCallback } from 'react';

export const useSTT = () => {
  const [isTranscribing, setIsTranscribing] = useState(false);

  const transcribe = useCallback(async (audioUrl: string) => {
    setIsTranscribing(true);
    console.log(`Hook: Transcribing ${audioUrl}`);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsTranscribing(false);
    return { text: 'Transcribed text' };
  }, []);

  return { transcribe, isTranscribing };
};
