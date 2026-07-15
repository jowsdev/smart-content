export const frameMapper = {
  mapTimeToFrame: (timeMs: number, fps: number) => Math.floor((timeMs / 1000) * fps),
};
