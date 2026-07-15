import { Composition } from '../../video/types/composition.types';
import { CompositionMapper } from '../engine/CompositionMapper';

export class CompositionAdapter {
  public async compile(composition: Composition) {
    console.log('Remotion Composition: Compiling');
    return CompositionMapper.mapToRemotion(composition);
  }
}
