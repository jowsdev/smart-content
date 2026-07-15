import { conversationEngine } from '../engine/ConversationEngine';
import type { Message } from '../types/message.types';
import type { Conversation } from '../types/conversation.types';
import { mockMessages } from '../data/mockMessages';

export const messageService = {
  async getMessages(conversationId: string): Promise<Message[]> {
    return mockMessages.filter(m => m.conversationId === conversationId);
  },

  async sendMessage(conversation: Conversation, content: string): Promise<Message> {
    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      conversationId: conversation.id,
      role: 'user',
      content,
      timestamp: new Date().toISOString(),
      status: 'sent'
    };

    conversation.messages.push(userMessage);

    // Simulate engine response
    const response = await conversationEngine.processMessage(conversation, userMessage);

    const assistantMessage: Message = {
      id: response.id,
      conversationId: conversation.id,
      role: 'assistant',
      content: response.content,
      timestamp: response.createdAt,
      provider: response.provider,
      model: response.model,
      tokens: response.usage.totalTokens,
      cost: response.cost,
      status: 'sent'
    };

    conversation.messages.push(assistantMessage);
    return assistantMessage;
  }
};
