import { BaseAudioProvider } from '../adapters/BaseAudioProvider';

export class AudioProviderRegistry {
  private static providers: Map<string, BaseAudioProvider> = new Map();

  static register(provider: BaseAudioProvider) {
    this.providers.set(provider.id, provider);
  }

  static get(id: string) {
    return this.providers.get(id);
  }

  static getAll() {
    return Array.from(this.providers.values());
  }
}
