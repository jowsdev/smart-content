import { Animation } from '../types/animation.types';

export class AnimationRegistry {
  private static animations: Map<string, Animation> = new Map();

  static register(animation: Animation) {
    this.animations.set(animation.id, animation);
  }

  static get(id: string) {
    return this.animations.get(id);
  }
}
