import { RenderSettings } from '../types/render.types';

export const renderService = {
  startRender: async (compositionId: string, _settings: RenderSettings) => {
    console.log('Service: Starting render for', compositionId);
    return `render_${Date.now()}`;
  },

  cancelRender: async (renderId: string) => {
    console.log('Service: Canceling render', renderId);
  }
};
