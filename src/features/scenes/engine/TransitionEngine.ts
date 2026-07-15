export class TransitionEngine {
  public applyTransition(sceneA: any, sceneB: any, type: string) {
    console.log(`Transition Engine: Applying ${type} between scenes`);
  }
}

export const transitionEngine = new TransitionEngine();
