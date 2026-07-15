import { Voice } from '../types/voice.types';

export class VoiceRegistry {
  private static voices: Map<string, Voice> = new Map();

  static register(voice: Voice) {
    this.voices.set(voice.id, voice);
  }

  static get(id: string) {
    return this.voices.get(id);
  }

  static getAll() {
    return Array.from(this.voices.values());
  }

  static findByLanguage(lang: string) {
    return this.getAll().filter(v => v.language === lang);
  }
}
