export class VariantGenerator {
  public async generateThumbnail(asset: any) {
    console.log(`Variant Generator: Generating thumbnail for ${asset.id}`);
  }

  public async generatePreview(asset: any) {
    console.log(`Variant Generator: Generating preview for ${asset.id}`);
  }
}

export const variantGenerator = new VariantGenerator();
