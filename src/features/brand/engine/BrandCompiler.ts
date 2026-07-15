import type { Brand } from '../types/brand.types';

export class BrandCompiler {
  compileContext(brand: Brand): string {
    const sections: string[] = [];

    sections.push(`BRAND IDENTITY:
Name: ${brand.name}
Description: ${brand.description}
Industry: ${brand.industry}
Website: ${brand.website || 'N/A'}`);

    sections.push(`BRAND VOICE:
Voice: ${brand.voice}
Tone: ${brand.tone}`);

    if (brand.guidelines.writingStyle) {
      sections.push(`WRITING GUIDELINES:
Style: ${brand.guidelines.writingStyle}
Preferred Vocab: ${brand.guidelines.preferredVocabulary.join(', ')}
Forbidden Words: ${brand.guidelines.forbiddenWords.join(', ')}`);
    }

    if (brand.audiences.length > 0) {
      const audiences = brand.audiences.map(a => `- ${a.name}: ${a.persona}`).join('\n');
      sections.push(`TARGET AUDIENCES:\n${audiences}`);
    }

    if (brand.products.length > 0) {
      const products = brand.products.map(p => `- ${p.name}: ${p.description}`).join('\n');
      sections.push(`KEY PRODUCTS:\n${products}`);
    }

    return sections.join('\n\n');
  }
}
