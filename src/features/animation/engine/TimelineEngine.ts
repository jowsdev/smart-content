export class TimelineEngine {
  public snap(frame: number, threshold: number = 5) {
    console.log(`Timeline Engine: Snapping frame ${frame} with threshold ${threshold}`);
    return frame;
  }
}

export const timelineEngine = new TimelineEngine();
