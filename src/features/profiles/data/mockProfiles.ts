import { profileRegistry } from '../registry/ProfileRegistry';
import type { Profile } from '../types/profile.types';

const mockProfiles: Profile[] = [
  {
    id: 'profile-blog-expert',
    name: 'Expert Blog Writer',
    description: 'High-quality SEO optimized blog posts with brand voice alignment.',
    category: 'Blog Writing',
    version: '1.0.0',
    status: 'active',
    favorite: true,
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-06-01T12:00:00Z',
    agentIds: ['agent-content-specialist', 'agent-seo-optimizer'],
    workflowIds: ['wf-blog-post'],
    promptIds: ['p-professional-tone'],
    providerIds: ['openai'],
    modelIds: ['gpt-4o'],
    knowledgeCollectionIds: ['col-global'],
    templateIds: ['t-blog-post'],
    variables: [
      {
        id: 'v-target-audience',
        key: 'target_audience',
        label: 'Target Audience',
        type: 'string',
        required: true,
        description: 'Who are we writing for?'
      }
    ],
    settings: {
      defaultLanguage: 'English',
      tone: 'Professional',
      audience: 'Tech Professionals',
      preferredProviderId: 'openai',
      preferredModelId: 'gpt-4o',
      defaultWorkflowId: 'wf-blog-post',
      defaultTemplateId: 't-blog-post',
      autoSave: true,
      autoVersioning: true,
      outputFormat: 'markdown'
    },
    permissions: {
      canEdit: true,
      canShare: true,
      canDelete: false
    },
    tags: ['seo', 'blog', 'marketing'],
    metadata: {}
  },
  {
    id: 'profile-social-media',
    name: 'Social Media Manager',
    description: 'Generate engaging posts for Twitter, LinkedIn, and Instagram.',
    category: 'Social Media',
    version: '1.2.0',
    status: 'active',
    favorite: false,
    createdAt: '2026-02-15T00:00:00Z',
    updatedAt: '2026-05-20T10:30:00Z',
    agentIds: ['agent-content-specialist'],
    workflowIds: [],
    promptIds: [],
    providerIds: ['anthropic'],
    modelIds: ['claude-3-5-sonnet'],
    knowledgeCollectionIds: ['col-workspace'],
    templateIds: [],
    variables: [],
    settings: {
      defaultLanguage: 'English',
      tone: 'Engaging',
      audience: 'General Public',
      preferredProviderId: 'anthropic',
      preferredModelId: 'claude-3-5-sonnet',
      autoSave: true,
      autoVersioning: false,
      outputFormat: 'text'
    },
    permissions: {
      canEdit: true,
      canShare: true,
      canDelete: true
    },
    tags: ['social', 'twitter', 'linkedin'],
    metadata: {}
  }
];

// Initialize registry with mock data
mockProfiles.forEach(p => profileRegistry.register(p));

export { mockProfiles };
