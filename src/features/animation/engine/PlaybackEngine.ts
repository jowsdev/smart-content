export class PlaybackEngine {
  private isPlaying: boolean = false;

  public play() { this.isPlaying = true; }
  public pause() { this.isPlaying = false; }
  public getStatus() { return this.isPlaying; }
}

export const playbackEngine = new PlaybackEngine();
