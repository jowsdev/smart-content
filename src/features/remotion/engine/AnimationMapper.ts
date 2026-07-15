export class AnimationMapper {
  static mapToSpring(animation: any) {
    // Convert studio animation properties to Remotion spring configs
    return {
      frame: animation.frame,
      config: animation.config,
    };
  }
}
