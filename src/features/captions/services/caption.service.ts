import { Caption } from '../types/caption.types';

export const captionService = {
  createCaptions: async (_text: string): Promise<Caption[]> => {
    console.log('Caption Service: Generating from text');
    return [];
  },

  importCaptions: async (file: File): Promise<Caption[]> => {
    console.log('Caption Service: Importing', file.name);
    return [];
  },

  exportCaptions: async (_captions: Caption[], format: string): Promise<string> => {
    console.log('Caption Service: Exporting to', format);
    return '';
  }
};
