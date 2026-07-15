import { BaseImageProvider } from './BaseImageProvider';
import { ImageRequest } from '../types/generation.types';
import { GeneratedImage } from '../types/image.types';

export class StableDiffusionAdapter extends BaseImageProvider {
  id = 'stability';
  name = 'Stable Diffusion';
  capabilities = ['text-to-image', 'image-to-image', 'inpaint', 'outpaint'];

  async generate(request: ImageRequest): Promise<GeneratedImage[]> {
    console.log(`Stable Diffusion: Generating with prompt: ${request.prompt}`);
    return [];
  }
}
