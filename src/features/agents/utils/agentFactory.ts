import type { Agent } from '../types/agent.types';

export const createAgent = (config: Partial<Agent>): Agent => {
  return {
    id: `agent-${Math.random().toString(36).substr(2, 9)}`,
    name: 'new-agent',
    displayName: 'New Agent',
    description: '',
    category: 'Custom',
    icon: '🤖',
    color: '#9CA3AF',
    version: '1.0.0',
    author: 'User',
    enabled: true,
    favorite: false,
    tags: [],
    provider: 'Custom',
    recommendedModel: 'default',
    capabilities: [],
    tools: [],
    inputs: [],
    outputs: [],
    settings: {},
    permissions: [],
    metadata: {},
    ...config
  };
};
