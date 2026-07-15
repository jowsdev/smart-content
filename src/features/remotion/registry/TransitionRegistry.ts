export class TransitionRegistry {
  private static transitions: Map<string, any> = new Map();

  static register(id: string, transition: any) {
    this.transitions.set(id, transition);
  }

  static get(id: string) {
    return this.transitions.get(id);
  }
}
