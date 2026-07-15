import { Scene } from '../types/scene.types';

export class SceneValidator {
  public validate(scene: Scene) {
    console.log(`Scene Validator: Validating ${scene.id}`);
    return { isValid: true };
  }
}

export const sceneValidator = new SceneValidator();
