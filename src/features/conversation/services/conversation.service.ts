import { mockConversations } from '../data/mockConversations';
import type { Conversation, ConversationSummary } from '../types/conversation.types';

export const conversationService = {
  async getConversations(): Promise<ConversationSummary[]> {
    return mockConversations.map(c => ({
      id: c.id,
      title: c.title,
      lastMessageAt: c.updatedAt,
      messageCount: c.messages.length,
      status: c.status,
      favorite: c.favorite
    }));
  },

  async getConversation(id: string): Promise<Conversation | undefined> {
    return mockConversations.find(c => c.id === id);
  },

  async createConversation(params: Partial<Conversation>): Promise<Conversation> {
    const newConv: Conversation = {
      id: `conv-${Date.now()}`,
      title: params.title || 'New Conversation',
      provider: params.provider || 'openai',
      model: params.model || 'gpt-4o',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      favorite: false,
      archived: false,
      status: 'active',
      settings: params.settings || { temperature: 0.7, maxTokens: 2000, topP: 1, stream: true },
      messages: [],
      ...params
    };
    mockConversations.push(newConv);
    return newConv;
  },

  async deleteConversation(id: string): Promise<void> {
    const index = mockConversations.findIndex(c => c.id === id);
    if (index !== -1) mockConversations.splice(index, 1);
  },

  async archiveConversation(id: string): Promise<void> {
    const conv = mockConversations.find(c => c.id === id);
    if (conv) {
      conv.status = 'archived';
      conv.archived = true;
    }
  }
};
