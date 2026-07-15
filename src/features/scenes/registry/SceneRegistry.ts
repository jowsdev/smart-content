import { Scene } from '../types/scene.types';

export class SceneRegistry {
  private static scenes: Map<string, Scene> = new Map();

  static register(scene: Scene) {
    this.scenes.set(scene.id, scene);
  }

  static get(id: string) {
    return this.scenes.get(id);
  }

  static getAll() {
    return Array.from(this.scenes.values());
  }

  static findByCategory(category: string) {
    return this.getAll().filter(s => s.category === category);
  }
}
