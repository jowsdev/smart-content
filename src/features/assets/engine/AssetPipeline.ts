export class AssetPipeline {
  public async process(file: File) {
    console.log(`Asset Pipeline: Processing ${file.name}`);
    return { id: `asset_${Date.now()}` };
  }
}

export const assetPipeline = new AssetPipeline();
