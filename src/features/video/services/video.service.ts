import { Composition } from '../types/composition.types';

export const videoService = {
  createComposition: async (data: Partial<Composition>): Promise<Composition> => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      projectId: 'default',
      name: 'Untitled Composition',
      width: 1920,
      height: 1080,
      fps: 30,
      durationInFrames: 300,
      scenes: [],
      tracks: [],
      variables: {},
      metadata: {},
      status: 'draft',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...data,
    } as Composition;
  },

  saveComposition: async (composition: Composition): Promise<void> => {
    console.log('Saving composition:', composition.id);
  },

  exportComposition: async (id: string): Promise<string> => {
    console.log('Exporting composition:', id);
    return `job_${Math.random().toString(36).substr(2, 9)}`;
  }
};
