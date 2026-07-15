import { BaseImageProvider } from './BaseImageProvider';
import { ImageRequest } from '../types/generation.types';
import { GeneratedImage } from '../types/image.types';

export class OpenAIImageAdapter extends BaseImageProvider {
  id = 'openai';
  name = 'OpenAI DALL-E';
  capabilities = ['text-to-image', 'edit', 'variations'];

  async generate(request: ImageRequest): Promise<GeneratedImage[]> {
    console.log(`OpenAI: Generating with prompt: ${request.prompt}`);
    return [];
  }
}
