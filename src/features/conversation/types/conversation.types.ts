import type { Message } from './message.types';

export type ConversationStatus = 'active' | 'archived' | 'deleted' | 'idle';

export interface Conversation {
  id: string;
  title: string;
  projectId?: string;
  profileId?: string;
  workflowId?: string;
  agentId?: string;
  provider: string;
  model: string;
  createdAt: string;
  updatedAt: string;
  favorite: boolean;
  archived: boolean;
  status: ConversationStatus;
  settings: ConversationSettings;
  messages: Message[];
  metadata?: Record<string, any>;
}

export interface ConversationSettings {
  temperature: number;
  maxTokens: number;
  topP: number;
  systemPrompt?: string;
  stream: boolean;
}

export interface ConversationSummary {
  id: string;
  title: string;
  lastMessageAt: string;
  messageCount: number;
  status: ConversationStatus;
  favorite: boolean;
}
