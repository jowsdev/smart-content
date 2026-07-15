export abstract class BaseAudioProvider {
  abstract id: string;
  abstract name: string;

  async generateSpeech(_text: string, _voiceId: string): Promise<string> {
    console.log(`Audio Provider ${this.id}: Generating speech`);
    return 'audio_url';
  }

  async transcribe(_audioUrl: string): Promise<any> {
    console.log(`Audio Provider ${this.id}: Transcribing`);
    return {};
  }
}
