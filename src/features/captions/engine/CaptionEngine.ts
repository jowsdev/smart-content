import { Caption } from '../types/caption.types';

export class CaptionEngine {
  public createCaption(text: string, start: number, end: number): Caption {
    return {
      id: `cap_${Date.now()}`,
      language: 'en',
      startTime: start,
      endTime: end,
      text,
      words: [],
      styleId: 'default',
      animations: [],
      metadata: {}
    };
  }
}

export const captionEngine = new CaptionEngine();
