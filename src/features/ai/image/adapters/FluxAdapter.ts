import { BaseImageProvider } from './BaseImageProvider';
import { ImageRequest } from '../types/generation.types';
import { GeneratedImage } from '../types/image.types';

export class FluxAdapter extends BaseImageProvider {
  id = 'flux';
  name = 'Black Forest Labs Flux';
  capabilities = ['text-to-image', 'high-detail'];

  async generate(request: ImageRequest): Promise<GeneratedImage[]> {
    console.log(`Flux: Generating with prompt: ${request.prompt}`);
    return [];
  }
}
