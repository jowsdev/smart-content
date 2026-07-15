export class TTSEngine {
  public async synthesize(text: string, voiceId: string) {
    console.log(`TTS Engine: Synthesizing "${text.substring(0, 20)}..." with ${voiceId}`);
    return 'generated_audio_url';
  }
}

export const ttsEngine = new TTSEngine();
