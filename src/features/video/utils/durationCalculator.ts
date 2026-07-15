export const durationCalculator = {
  toFrames: (seconds: number, fps: number) => Math.round(seconds * fps),
  toSeconds: (frames: number, fps: number) => frames / fps,
};
