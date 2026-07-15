import { BaseImageProvider } from './BaseImageProvider';
import { ImageRequest } from '../types/generation.types';
import { GeneratedImage } from '../types/image.types';

export class IdeogramAdapter extends BaseImageProvider {
  id = 'ideogram';
  name = 'Ideogram';
  capabilities = ['text-to-image', 'typography'];

  async generate(request: ImageRequest): Promise<GeneratedImage[]> {
    console.log(`Ideogram: Generating with prompt: ${request.prompt}`);
    return [];
  }
}
