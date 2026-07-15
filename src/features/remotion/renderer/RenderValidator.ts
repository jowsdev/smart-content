import type { Composition } from '../../../shared/domain/composition.types';

export class RenderValidator {
  static validate(composition: Composition) {
    if (composition.durationInFrames <= 0) {
      return { isValid: false, error: 'Composition has no duration' };
    }
    if (composition.width <= 0 || composition.height <= 0) {
      return { isValid: false, error: 'Invalid dimensions' };
    }
    return { isValid: true };
  }
}
