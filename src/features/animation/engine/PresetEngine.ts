export class PresetEngine {
  public apply(presetId: string, targetId: string) {
    console.log(`Preset Engine: Applying ${presetId} to ${targetId}`);
  }
}

export const presetEngine = new PresetEngine();
