export const audioService = {
  generateSpeech: async (_text: string, _voiceId: string) => {
    console.log('Audio Service: Generating speech');
    return { id: `audio_${Date.now()}`, url: '#' };
  },

  transcribe: async (_audioUrl: string) => {
    console.log('Audio Service: Transcribing');
    return { text: 'Simulated' };
  },

  estimate: async (_text: string) => {
    return 0.01;
  }
};
