import type { Composition } from '../../../shared/domain/composition.types';

export const compositionConverter = {
  toRemotionSchema: (composition: Composition) => {
    // End-to-end conversion logic
    return {
      width: composition.width,
      height: composition.height,
      fps: composition.fps,
      durationInFrames: composition.durationInFrames,
      scenes: [], // Mapped scenes
    };
  }
};
