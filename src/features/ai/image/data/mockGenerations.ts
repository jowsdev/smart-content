import { GeneratedImage } from '../types/image.types';

export const mockGenerations: GeneratedImage[] = [
  {
    id: 'gen_1',
    provider: 'openai',
    model: 'dall-e-3',
    prompt: 'A futuristic city at sunset, cinematic lighting',
    width: 1024,
    height: 1024,
    format: 'png',
    status: 'completed',
    thumbnail: '',
    preview: '',
    metadata: {},
    createdAt: new Date().toISOString(),
  },
  {
    id: 'gen_2',
    provider: 'flux',
    model: 'flux-pro',
    prompt: 'Cyberpunk character portrait, neon glow',
    width: 1024,
    height: 1024,
    format: 'webp',
    status: 'completed',
    thumbnail: '',
    preview: '',
    metadata: {},
    createdAt: new Date().toISOString(),
  }
];
