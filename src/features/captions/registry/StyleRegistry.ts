import { CaptionStyle } from '../types/style.types';

export class StyleRegistry {
  private static styles: Map<string, CaptionStyle> = new Map();

  static register(style: CaptionStyle) {
    this.styles.set(style.id, style);
  }

  static get(id: string) {
    return this.styles.get(id);
  }

  static getAll() {
    return Array.from(this.styles.values());
  }
}
