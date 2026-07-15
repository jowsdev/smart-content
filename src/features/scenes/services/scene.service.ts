import { Scene } from '../types/scene.types';

export const sceneService = {
  createScene: async (data: Partial<Scene>): Promise<Scene> => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      name: 'New Scene',
      description: '',
      category: 'Content',
      duration: 300,
      layers: [],
      animations: [],
      transitions: [],
      variables: {},
      assets: [],
      metadata: {},
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...data
    } as Scene;
  },

  saveScene: async (scene: Scene): Promise<void> => {
    console.log('Scene Service: Saving', scene.id);
  },

  deleteScene: async (id: string): Promise<void> => {
    console.log('Scene Service: Deleting', id);
  }
};
