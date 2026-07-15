import type { Brand, BrandSummary } from '../types/brand.types';

class BrandRegistry {
  private brands: Map<string, Brand> = new Map();

  register(brand: Brand) {
    this.brands.set(brand.id, brand);
  }

  getBrand(id: string) {
    return this.brands.get(id);
  }

  getAll() {
    return Array.from(this.brands.values());
  }

  getSummaries(): BrandSummary[] {
    return this.getAll().map(b => ({
      id: b.id,
      name: b.name,
      industry: b.industry,
      logo: b.logo,
      productCount: b.products.length,
      variableCount: b.variables.length
    }));
  }

  delete(id: string) {
    this.brands.delete(id);
  }
}

export const brandRegistry = new BrandRegistry();
