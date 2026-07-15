export class PlaybackController {
  private isPlaying: boolean = false;
  private currentFrame: number = 0;

  public togglePlay() {
    this.isPlaying = !this.isPlaying;
    return this.isPlaying;
  }

  public setFrame(frame: number) {
    this.currentFrame = frame;
  }

  public getStatus() {
    return {
      isPlaying: this.isPlaying,
      currentFrame: this.currentFrame,
    };
  }
}
