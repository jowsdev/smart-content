export class LayerEngine {
  public calculatePosition(layer: any, frame: number) {
    console.log(`Layer Engine: Calculating position for ${layer.id} at frame ${frame}`);
    return { x: 0, y: 0 };
  }
}

export const layerEngine = new LayerEngine();
