import { ImageRequest } from '../types/generation.types';

export class ImageValidator {
  public validateRequest(request: ImageRequest) {
    if (!request.prompt) return { isValid: false, error: 'Prompt is required' };
    return { isValid: true };
  }
}

export const imageValidator = new ImageValidator();
