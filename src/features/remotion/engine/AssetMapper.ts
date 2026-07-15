export class AssetMapper {
  static mapToMedia(asset: any) {
    return {
      src: asset.url,
      type: asset.mimeType,
    };
  }
}
