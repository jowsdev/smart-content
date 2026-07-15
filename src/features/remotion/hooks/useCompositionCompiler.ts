import { useCallback } from 'react';
import { Composition } from '../../video/types/composition.types';
import { compositionConverter } from '../utils/compositionConverter';

export const useCompositionCompiler = () => {
  const compile = useCallback((composition: Composition) => {
    return compositionConverter.toRemotionSchema(composition);
  }, []);

  return { compile };
};
