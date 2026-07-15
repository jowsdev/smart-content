import type { Message } from '../types/message.types';

export const mockMessages: Message[] = [
  {
    id: 'msg-1',
    conversationId: 'conv-1',
    role: 'user',
    content: 'Hello, how can you help me today?',
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    status: 'sent'
  },
  {
    id: 'msg-2',
    conversationId: 'conv-1',
    role: 'assistant',
    content: 'I am your Smart Content assistant. I can help you write blogs, generate SEO keywords, or manage your AI agents.',
    timestamp: new Date(Date.now() - 3500000).toISOString(),
    status: 'sent',
    provider: 'openai',
    model: 'gpt-4o'
  }
];
