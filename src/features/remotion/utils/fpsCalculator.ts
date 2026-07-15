export const fpsCalculator = {
  framesToSeconds: (frames: number, fps: number) => frames / fps,
  secondsToFrames: (seconds: number, fps: number) => Math.round(seconds * fps),
};
