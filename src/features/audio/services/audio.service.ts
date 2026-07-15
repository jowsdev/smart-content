export const audioService = {
  generateSpeech: async (text: string, voiceId: string) => {
    console.log('Audio Service: Generating speech');
    return { id: `audio_${Date.now()}`, url: '#' };
  },

  transcribe: async (audioUrl: string) => {
    console.log('Audio Service: Transcribing');
    return { text: 'Simulated' };
  },

  estimate: async (text: string) => {
    return 0.01;
  }
};
