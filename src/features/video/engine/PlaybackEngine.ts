export class PlaybackEngine {
  private isPlaying: boolean = false;

  public play() {
    this.isPlaying = true;
    console.log('Playback started');
  }

  public pause() {
    this.isPlaying = false;
    console.log('Playback paused');
  }

  public getStatus() {
    return this.isPlaying;
  }
}
