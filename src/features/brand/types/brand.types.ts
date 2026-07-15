import type { Product, BrandService } from './product.types';
import type { Audience } from './audience.types';
import type { BrandVariable } from './variable.types';

export type BrandVoice =
  | 'Friendly'
  | 'Professional'
  | 'Luxury'
  | 'Corporate'
  | 'Minimal'
  | 'Technical'
  | 'Playful'
  | 'Educational'
  | 'Premium'
  | 'Conversational'
  | 'Custom';

export interface Brand {
  id: string;
  name: string;
  description: string;
  industry: string;
  website?: string;
  logo?: string;
  colors: BrandColors;
  typography: BrandTypography;
  voice: BrandVoice;
  tone: string;
  mission?: string;
  vision?: string;
  values: string[];
  languages: string[];
  countries: string[];
  audiences: Audience[];
  products: Product[];
  services: BrandService[];
  socialLinks: Record<string, string>;
  domains: string[];
  variables: BrandVariable[];
  guidelines: BrandGuidelines;
  assets: BrandAsset[];
  seo: BrandSEO;
  metadata: Record<string, any>;
}

export interface BrandColors {
  primary: string;
  secondary: string;
  accent?: string;
  background?: string;
  text?: string;
}

export interface BrandTypography {
  primaryFont: string;
  secondaryFont?: string;
  baseSize: string;
}

export interface BrandGuidelines {
  writingStyle: string;
  grammar: string;
  forbiddenWords: string[];
  preferredVocabulary: string[];
  emojiRules: string;
  formattingRules: string;
  ctaRules: string;
  seoRules: string;
  complianceRules: string;
}

export interface BrandAsset {
  id: string;
  name: string;
  type: 'image' | 'video' | 'document';
  url: string;
}

export interface BrandSEO {
  mainKeywords: string[];
  description: string;
  titleTemplate: string;
}

export interface BrandSummary {
  id: string;
  name: string;
  industry: string;
  logo?: string;
  productCount: number;
  variableCount: number;
}
