import { Caption } from '../types/caption.types';

export class CaptionRegistry {
  private static captions: Map<string, Caption> = new Map();

  static register(caption: Caption) {
    this.captions.set(caption.id, caption);
  }

  static get(id: string) {
    return this.captions.get(id);
  }

  static getAll() {
    return Array.from(this.captions.values());
  }
}
