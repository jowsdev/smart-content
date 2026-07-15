import { RemotionComposition } from '../types/remotion.types';

export class CompositionRegistry {
  private static compositions: Map<string, RemotionComposition> = new Map();

  static register(composition: RemotionComposition) {
    this.compositions.set(composition.id, composition);
  }

  static get(id: string) {
    return this.compositions.get(id);
  }
}
