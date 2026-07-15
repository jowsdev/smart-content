import { ImageRequest } from '../types/generation.types';
import { GeneratedImage } from '../types/image.types';
import { ImageProvider } from '../types/provider.types';

export abstract class BaseImageProvider implements ImageProvider {
  abstract id: string;
  abstract name: string;
  abstract capabilities: string[];

  abstract generate(request: ImageRequest): Promise<GeneratedImage[]>;

  async estimateCost(_request: ImageRequest): Promise<number> {
    return 0.02; // Base cost
  }
}
