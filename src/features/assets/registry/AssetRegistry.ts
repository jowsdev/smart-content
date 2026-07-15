import { Asset } from '../types/asset.types';

export class AssetRegistry {
  private static assets: Map<string, Asset> = new Map();

  static register(asset: Asset) {
    this.assets.set(asset.id, asset);
  }

  static get(id: string) {
    return this.assets.get(id);
  }

  static getAll() {
    return Array.from(this.assets.values());
  }

  static findByType(type: string) {
    return this.getAll().filter(a => a.type === type);
  }
}
