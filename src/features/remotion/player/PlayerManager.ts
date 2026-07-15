import { PlayerAdapter } from '../adapters/PlayerAdapter';

export class PlayerManager {
  private adapter: PlayerAdapter;

  constructor() {
    this.adapter = new PlayerAdapter();
  }

  public play() {
    this.adapter.play();
  }

  public pause() {
    this.adapter.pause();
  }

  public seek(frame: number) {
    this.adapter.seek(frame);
  }
}
