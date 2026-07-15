import { ImageProvider } from '../types/provider.types';
import { ImageRequest } from '../types/generation.types';

export class ImageProviderRegistry {
  private static providers: Map<string, ImageProvider> = new Map();

  static register(provider: ImageProvider) {
    this.providers.set(provider.id, provider);
  }

  static getProvider(id: string) {
    return this.providers.get(id);
  }

  static getAll() {
    return Array.from(this.providers.values());
  }

  static async execute(request: ImageRequest) {
    const provider = this.getProvider(request.provider);
    if (!provider) throw new Error(`Provider ${request.provider} not found`);
    return provider.generate(request);
  }
}
