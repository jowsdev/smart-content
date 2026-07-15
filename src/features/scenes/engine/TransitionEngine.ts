export class TransitionEngine {
  public applyTransition(_sceneA: any, _sceneB: any, type: string) {
    console.log(`Transition Engine: Applying ${type} between scenes`);
  }
}

export const transitionEngine = new TransitionEngine();
