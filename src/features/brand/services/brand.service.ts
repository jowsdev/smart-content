import { brandRegistry } from '../registry/BrandRegistry';
import { VariableResolver } from '../engine/VariableResolver';
import { BrandCompiler } from '../engine/BrandCompiler';
import type { Brand, BrandSummary } from '../types/brand.types';

const resolver = new VariableResolver();
const compiler = new BrandCompiler();

export const brandService = {
  async loadBrands(): Promise<BrandSummary[]> {
    return new Promise(resolve => setTimeout(() => resolve(brandRegistry.getSummaries()), 500));
  },

  async getBrand(id: string): Promise<Brand | undefined> {
    return new Promise(resolve => setTimeout(() => resolve(brandRegistry.getBrand(id)), 300));
  },

  async createBrand(brand: Brand): Promise<void> {
    brandRegistry.register(brand);
  },

  async saveBrand(brand: Brand): Promise<void> {
    brandRegistry.register(brand);
  },

  async deleteBrand(id: string): Promise<void> {
    brandRegistry.delete(id);
  },

  resolveVariables(text: string, brand: Brand): string {
    return resolver.resolve(text, brand);
  },

  compileContext(brand: Brand): string {
    return compiler.compileContext(brand);
  }
};
