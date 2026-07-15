export class AssetProcessor {
  public async optimize(asset: any) {
    console.log(`Asset Processor: Optimizing ${asset.id}`);
  }
}

export const assetProcessor = new AssetProcessor();
