export class AudioEngine {
  public async play(url: string) {
    console.log(`Audio Engine: Playing ${url}`);
  }

  public async stop() {
    console.log('Audio Engine: Stopped');
  }
}

export const audioEngine = new AudioEngine();
