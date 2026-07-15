import type { Brand } from '../types/brand.types';

export class VariableResolver {
  resolve(text: string, brand: Brand): string {
    let resolved = text;

    // Brand base variables
    const mappings: Record<string, string | undefined> = {
      'brand.name': brand.name,
      'brand.website': brand.website,
      'brand.description': brand.description,
      'brand.industry': brand.industry,
      'brand.primaryColor': brand.colors.primary,
      'brand.secondaryColor': brand.colors.secondary,
    };

    // Global variables in brand
    brand.variables.forEach(v => {
      mappings[`${v.category}.${v.key}`] = v.value;
    });

    // Replace all occurrences of {{key}}
    Object.entries(mappings).forEach(([key, value]) => {
      if (value !== undefined) {
        resolved = resolved.replace(new RegExp(`{{${key}}}`, 'g'), value);
      }
    });

    return resolved;
  }
}
