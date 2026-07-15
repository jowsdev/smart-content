export class KeyframeEngine {
  public findNeighbors(keyframes: any[], frame: number) {
    console.log(`Keyframe Engine: Finding neighbors for frame ${frame}`);
    return { prev: null, next: null };
  }
}

export const keyframeEngine = new KeyframeEngine();
