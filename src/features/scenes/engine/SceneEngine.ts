export class SceneEngine {
  public createScene(name: string) {
    console.log(`Scene Engine: Creating scene ${name}`);
  }

  public updateLayout(scene: any) {
    console.log(`Scene Engine: Updating layout for ${scene.id}`);
  }
}

export const sceneEngine = new SceneEngine();
