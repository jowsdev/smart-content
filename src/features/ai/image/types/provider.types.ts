import { ImageRequest } from './generation.types';
import { GeneratedImage } from './image.types';

export interface ImageProvider {
  id: string;
  name: string;
  capabilities: string[];
  generate(request: ImageRequest): Promise<GeneratedImage[]>;
  estimateCost(request: ImageRequest): Promise<number>;
}
