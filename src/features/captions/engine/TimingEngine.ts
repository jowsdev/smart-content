export class TimingEngine {
  public shiftCaptions(captions: any[], offsetMs: number) {
    console.log(`Timing Engine: Shifting all captions by ${offsetMs}ms`);
    return captions.map(c => ({
      ...c,
      startTime: c.startTime + offsetMs,
      endTime: c.endTime + offsetMs
    }));
  }
}

export const timingEngine = new TimingEngine();
