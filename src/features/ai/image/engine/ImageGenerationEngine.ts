import { ImageRequest } from '../types/generation.types';
import { ImageProviderRegistry } from '../registry/ImageProviderRegistry';

export class ImageGenerationEngine {
  public async generate(request: ImageRequest) {
    console.log(`Image Engine: Delegating generation to ${request.provider}`);
    return ImageProviderRegistry.execute(request);
  }
}

export const imageGenerationEngine = new ImageGenerationEngine();
