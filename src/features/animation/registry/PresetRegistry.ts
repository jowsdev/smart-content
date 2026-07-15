import { Preset } from '../types/preset.types';

export class PresetRegistry {
  private static presets: Map<string, Preset> = new Map();

  static register(preset: Preset) {
    this.presets.set(preset.id, preset);
  }

  static get(id: string) {
    return this.presets.get(id);
  }
}
