export class EffectRegistry {
  private static effects: Map<string, any> = new Map();

  static register(id: string, effect: any) {
    this.effects.set(id, effect);
  }

  static get(id: string) {
    return this.effects.get(id);
  }
}
