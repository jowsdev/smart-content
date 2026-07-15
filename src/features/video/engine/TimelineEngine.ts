export class TimelineEngine {
  constructor() {}

  public scrub(frame: number) {
    console.log(`Scrubbing to frame: ${frame}`);
  }

  public zoom(level: number) {
    console.log(`Zooming to level: ${level}`);
  }
}
