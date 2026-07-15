export class STTEngine {
  public async transcribe(audioUrl: string) {
    console.log(`STT Engine: Transcribing ${audioUrl}`);
    return { text: 'Simulated transcript' };
  }
}

export const sttEngine = new STTEngine();
