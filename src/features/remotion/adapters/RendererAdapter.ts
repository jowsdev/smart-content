import { RenderSettings } from '../types/render.types';

export class RendererAdapter {
  public async render(compositionId: string, settings: RenderSettings): Promise<string> {
    console.log(`Remotion Renderer: Rendering ${compositionId}`, settings);
    return `render_${Math.random().toString(36).substr(2, 9)}`;
  }

  public cancel(renderId: string) {
    console.log(`Remotion Renderer: Canceling ${renderId}`);
  }
}
