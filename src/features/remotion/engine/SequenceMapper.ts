import { RemotionSequence } from '../types/remotion.types';

export class SequenceMapper {
  static mapSceneToSequence(scene: any): RemotionSequence {
    return {
      from: 0, // Placeholder, calculated by layout engine
      durationInFrames: scene.durationInFrames,
      name: scene.title,
    };
  }
}
