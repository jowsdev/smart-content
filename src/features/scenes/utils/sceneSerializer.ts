import { Scene } from '../types/scene.types';

export const sceneSerializer = {
  serialize: (scene: Scene) => JSON.stringify(scene),
  deserialize: (data: string) => JSON.parse(data),
};

export const sceneExporter = {
  exportAsJson: (scene: Scene) => {
    console.log(`Exporting scene ${scene.id} as JSON`);
  }
};
