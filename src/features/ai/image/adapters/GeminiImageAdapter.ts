import { BaseImageProvider } from './BaseImageProvider';
import { ImageRequest } from '../types/generation.types';
import { GeneratedImage } from '../types/image.types';

export class GeminiImageAdapter extends BaseImageProvider {
  id = 'google';
  name = 'Google Gemini Imagen';
  capabilities = ['text-to-image', 'upscale'];

  async generate(request: ImageRequest): Promise<GeneratedImage[]> {
    console.log(`Gemini: Generating with prompt: ${request.prompt}`);
    return [];
  }
}
