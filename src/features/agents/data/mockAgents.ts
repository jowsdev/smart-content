import type { Agent } from '../types/agent.types';

export const mockAgents: Agent[] = [
  {
    id: 'agent-copywriter-01',
    name: 'creative-copywriter',
    displayName: 'Creative Copywriter',
    description: 'Expert in persuasive writing and creative storytelling for ads and blogs.',
    category: 'Copywriting',
    icon: '✍️',
    color: '#4F46E5',
    version: '1.0.0',
    author: 'Smart Content',
    enabled: true,
    favorite: true,
    tags: ['ads', 'blog', 'creative'],
    provider: 'OpenAI',
    recommendedModel: 'gpt-4o',
    capabilities: ['Text Generation', 'Rewrite', 'Summarize'],
    tools: [],
    inputs: [
      { id: 'topic', name: 'Topic', type: 'string', required: true },
      { id: 'tone', name: 'Tone of Voice', type: 'string', required: false, defaultValue: 'Professional' }
    ],
    outputs: [
      { id: 'content', name: 'Generated Content', type: 'string' }
    ],
    settings: {},
    permissions: [],
    metadata: {}
  },
  {
    id: 'agent-seo-01',
    name: 'seo-optimizer',
    displayName: 'SEO Optimizer',
    description: 'Analyzes and optimizes content for search engines.',
    category: 'SEO',
    icon: '🔍',
    color: '#10B981',
    version: '1.1.0',
    author: 'Smart Content',
    enabled: true,
    favorite: false,
    tags: ['seo', 'optimization', 'ranking'],
    provider: 'Anthropic',
    recommendedModel: 'claude-3-5-sonnet',
    capabilities: ['SEO', 'Validation', 'Research'],
    tools: [],
    inputs: [
      { id: 'content', name: 'Content to Optimize', type: 'string', required: true },
      { id: 'keywords', name: 'Target Keywords', type: 'array', required: true }
    ],
    outputs: [
      { id: 'optimizedContent', name: 'Optimized Content', type: 'string' },
      { id: 'seoScore', name: 'SEO Score', type: 'number' }
    ],
    settings: {},
    permissions: [],
    metadata: {}
  },
  {
    id: 'agent-coder-01',
    name: 'code-assistant',
    displayName: 'Code Assistant',
    description: 'Specialized in generating and refactoring code in multiple languages.',
    category: 'Coding',
    icon: '💻',
    color: '#F59E0B',
    version: '0.9.5',
    author: 'Smart Content',
    enabled: true,
    favorite: true,
    tags: ['code', 'development', 'refactoring'],
    provider: 'OpenAI',
    recommendedModel: 'gpt-4-turbo',
    capabilities: ['Coding', 'Reasoning', 'JSON Output'],
    tools: [],
    inputs: [
      { id: 'instruction', name: 'Coding Instruction', type: 'string', required: true },
      { id: 'language', name: 'Language', type: 'string', required: true }
    ],
    outputs: [
      { id: 'code', name: 'Generated Code', type: 'string' }
    ],
    settings: {},
    permissions: [],
    metadata: {}
  }
];
