import type { BaseRenderer } from '../adapters/BaseRenderer';

export class RendererRegistry {
  private static instance: RendererRegistry;
  private renderers: Map<string, BaseRenderer> = new Map();

  private constructor() {}

  public static getInstance(): RendererRegistry {
    if (!RendererRegistry.instance) {
      RendererRegistry.instance = new RendererRegistry();
    }
    return RendererRegistry.instance;
  }

  public register(renderer: BaseRenderer): void {
    const info = renderer.getInfo();
    this.renderers.set(info.id, renderer);
  }

  public get(id: string): BaseRenderer | undefined {
    return this.renderers.get(id);
  }

  public list(): BaseRenderer[] {
    return Array.from(this.renderers.values());
  }

  public remove(id: string): void {
    this.renderers.delete(id);
  }
}

export const rendererRegistry = RendererRegistry.getInstance();
