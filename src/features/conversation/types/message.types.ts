export type MessageRole =
  | 'system'
  | 'developer'
  | 'user'
  | 'assistant'
  | 'tool'
  | 'function'
  | 'workflow'
  | 'agent'
  | 'custom';

export interface Message {
  id: string;
  conversationId: string;
  role: MessageRole;
  content: string;
  attachments?: Attachment[];
  timestamp: string;
  provider?: string;
  model?: string;
  tokens?: number;
  cost?: number;
  status: 'sending' | 'sent' | 'error' | 'streaming';
  metadata?: Record<string, any>;
}

export interface Attachment {
  id: string;
  type: 'image' | 'document' | 'code' | 'file';
  url: string;
  name: string;
  size: number;
}
