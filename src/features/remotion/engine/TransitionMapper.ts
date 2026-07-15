export class TransitionMapper {
  static mapToRemotion(transition: any) {
    return {
      type: transition.type,
      duration: transition.durationInFrames,
    };
  }
}
