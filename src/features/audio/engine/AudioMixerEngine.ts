export class AudioMixerEngine {
  public updateVolume(trackId: string, volume: number) {
    console.log(`Mixer Engine: Track ${trackId} volume -> ${volume}`);
  }
}

export const audioMixerEngine = new AudioMixerEngine();
