export class PlayerAdapter {
  constructor() {}

  public play() {
    console.log('Remotion Player: Play');
  }

  public pause() {
    console.log('Remotion Player: Pause');
  }

  public seek(frame: number) {
    console.log(`Remotion Player: Seek to ${frame}`);
  }
}
