import { Easing } from '../types/easing.types';

export class EasingRegistry {
  private static easings: Map<string, Easing> = new Map();

  static register(easing: Easing) {
    this.easings.set(easing.id, easing);
  }

  static get(id: string) {
    return this.easings.get(id);
  }
}
