export class AnimationEngine {
  public calculatePop(frame: number, startFrame: number) {
    console.log('Animation Engine: Calculating word pop effect');
    return frame - startFrame;
  }
}

export const animationEngine = new AnimationEngine();
