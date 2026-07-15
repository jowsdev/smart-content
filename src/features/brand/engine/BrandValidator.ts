import type { Brand } from '../types/brand.types';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export class BrandValidator {
  validate(brand: Brand): ValidationResult {
    const errors: string[] = [];

    if (!brand.name.trim()) errors.push('Brand name is required.');
    if (!brand.industry) errors.push('Industry is required.');
    if (!brand.colors.primary) errors.push('Primary color is required.');

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}
