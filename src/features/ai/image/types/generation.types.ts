export type GenerationStatus = 'pending' | 'processing' | 'completed' | 'error' | 'canceled';

export interface ImageRequest {
  id: string;
  provider: string;
  model: string;
  prompt: string;
  negativePrompt?: string;
  referenceImages?: string[];
  size: string;
  quality: 'standard' | 'hd';
  style?: string;
  seed?: number;
  numberOfImages: number;
  background?: string;
  outputFormat: 'png' | 'webp' | 'jpg';
  metadata: Record<string, any>;
}
