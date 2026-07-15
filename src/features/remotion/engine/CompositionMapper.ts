import type { Composition } from '../../../shared/domain/composition.types';
import { RemotionComposition } from '../types/remotion.types';

export class CompositionMapper {
  static mapToRemotion(composition: Composition): Partial<RemotionComposition> {
    return {
      id: composition.id,
      width: composition.width,
      height: composition.height,
      fps: composition.fps,
      durationInFrames: composition.durationInFrames,
    };
  }
}
