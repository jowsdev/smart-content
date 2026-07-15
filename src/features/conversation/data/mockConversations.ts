import type { Conversation } from '../types/conversation.types';
import { mockMessages } from './mockMessages';

export const mockConversations: Conversation[] = [
  {
    id: 'conv-1',
    title: 'New Content Strategy',
    provider: 'openai',
    model: 'gpt-4o',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date().toISOString(),
    favorite: true,
    archived: false,
    status: 'active',
    settings: {
      temperature: 0.7,
      maxTokens: 2000,
      topP: 1,
      stream: true,
      systemPrompt: 'You are a helpful content strategist.'
    },
    messages: mockMessages
  },
  {
    id: 'conv-2',
    title: 'Blog Draft: AI Trends',
    provider: 'anthropic',
    model: 'claude-3-5-sonnet',
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString(),
    favorite: false,
    archived: false,
    status: 'active',
    settings: {
      temperature: 0.8,
      maxTokens: 4000,
      topP: 1,
      stream: true
    },
    messages: []
  }
];
