import { Composition } from '../types/composition.types';

export class CompositionRegistry {
  private static compositions: Map<string, Composition> = new Map();

  static register(composition: Composition) {
    this.compositions.set(composition.id, composition);
  }

  static get(id: string) {
    return this.compositions.get(id);
  }
}
