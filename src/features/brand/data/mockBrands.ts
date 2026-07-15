import type { Brand } from '../types/brand.types';
import { brandRegistry } from '../registry/BrandRegistry';

export const mockBrands: Brand[] = [
  {
    id: 'brand-smart-content',
    name: 'Smart Content',
    description: 'The ultimate AI-powered content creation platform.',
    industry: 'Technology',
    website: 'https://smart-content.ai',
    colors: { primary: '#6366f1', secondary: '#4f46e5' },
    typography: { primaryFont: 'Inter', baseSize: '16px' },
    voice: 'Professional',
    tone: 'Confident and helpful',
    mission: 'Empower creators with intelligent tools.',
    values: ['Innovation', 'Quality', 'Accessibility'],
    languages: ['English', 'French'],
    countries: ['USA', 'France', 'UK'],
    audiences: [
      {
        id: 'aud-marketers',
        name: 'Digital Marketers',
        persona: 'Busy marketing professionals looking for efficiency.',
        interests: ['SEO', 'Content Strategy'],
        goals: ['Increase ROI', 'Save time'],
        painPoints: ['Manual writing', 'Slow research'],
        preferredPlatforms: ['LinkedIn', 'Twitter'],
        metadata: {}
      }
    ],
    products: [
      {
        id: 'prod-ai-engine',
        name: 'AI Execution Engine',
        description: 'Multi-provider execution core.',
        price: 99,
        features: ['Streaming', 'Retries'],
        benefits: ['Fast', 'Reliable'],
        category: 'Software',
        tags: ['core', 'ai'],
        metadata: {}
      }
    ],
    services: [],
    socialLinks: { Twitter: 'https://twitter.com/smartcontent' },
    domains: ['smart-content.ai'],
    variables: [
      { id: 'v1', key: 'support_email', value: 'support@smart-content.ai', label: 'Support Email', category: 'brand' }
    ],
    guidelines: {
      writingStyle: 'Concise and informative.',
      grammar: 'US English',
      forbiddenWords: ['impossible', 'cheap'],
      preferredVocabulary: ['streamline', 'leverage'],
      emojiRules: 'Use sparingly.',
      formattingRules: 'Use markdown headers.',
      ctaRules: 'Clear and action-oriented.',
      seoRules: 'Target keywords in first 100 words.',
      complianceRules: 'Always include legal footer.'
    },
    assets: [],
    seo: { mainKeywords: ['AI', 'Content'], description: 'Best AI platform', titleTemplate: '{{title}} | Smart Content' },
    metadata: {}
  }
];

mockBrands.forEach(b => brandRegistry.register(b));
