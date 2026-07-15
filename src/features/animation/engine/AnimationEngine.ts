export class AnimationEngine {
  public calculateValue(animation: any, frame: number) {
    console.log(`Animation Engine: Calculating value for ${animation.id} at frame ${frame}`);
    return 0; // Simulated value
  }
}

export const animationEngine = new AnimationEngine();
