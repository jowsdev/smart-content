import { ImageRequest } from '../types/generation.types';
import { GeneratedImage } from '../types/image.types';

export const imageGenerationService = {
  generateImage: async (request: ImageRequest): Promise<GeneratedImage[]> => {
    console.log('Image Service: Generating', request.prompt);
    return [];
  },

  editImage: async (id: string, _updates: any): Promise<GeneratedImage> => {
    console.log('Image Service: Editing', id);
    return {} as GeneratedImage;
  },

  estimate: async (_request: ImageRequest): Promise<number> => {
    return 0.05;
  }
};
