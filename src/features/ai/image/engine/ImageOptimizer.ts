export class ImageOptimizer {
  public async optimizeForWeb(imageUrl: string) {
    console.log(`Image Optimizer: Optimizing ${imageUrl}`);
    return imageUrl;
  }
}

export const imageOptimizer = new ImageOptimizer();
