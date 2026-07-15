import type { Message } from '../types/message.types';
import type { Conversation } from '../types/conversation.types';

export class ContextManager {
  buildContext(conversation: Conversation, extra?: any) {
    const messages = conversation.messages.map(m => ({
      role: this.mapRole(m.role),
      content: m.content
    }));

    return {
      systemPrompt: conversation.settings.systemPrompt,
      messages,
      temperature: conversation.settings.temperature,
      maxTokens: conversation.settings.maxTokens,
      metadata: {
        ...conversation.metadata,
        agentId: conversation.agentId,
        workflowId: conversation.workflowId,
        profileId: conversation.profileId,
        ...extra
      }
    };
  }

  private mapRole(role: string): any {
    // Map custom roles to standard roles for AI execution if needed
    if (['user', 'assistant', 'system'].includes(role)) return role;
    return 'user'; // Default mapping for others in basic context
  }
}
