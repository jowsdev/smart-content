import type { Composition } from '../../../shared/domain/composition.types';
import { compositionConverter } from '../utils/compositionConverter';

export const remotionService = {
  compileComposition: async (composition: Composition) => {
    return compositionConverter.toRemotionSchema(composition);
  },

  loadTemplate: async (id: string) => {
    console.log('Service: Loading template', id);
    return null;
  }
};
