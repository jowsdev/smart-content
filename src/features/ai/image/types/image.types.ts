import { GenerationStatus } from './generation.types';

export interface GeneratedImage {
  id: string;
  provider: string;
  model: string;
  prompt: string;
  width: number;
  height: number;
  format: string;
  status: GenerationStatus;
  thumbnail: string;
  preview: string;
  metadata: Record<string, any>;
  assetId?: string;
  createdAt: string;
}
