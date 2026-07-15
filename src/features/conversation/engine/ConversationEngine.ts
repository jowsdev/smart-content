import { MessageRouter } from './MessageRouter';
import { ContextManager } from './ContextManager';
import { ConversationMemory } from './ConversationMemory';
import { ConversationValidator } from './ConversationValidator';
import type { Conversation } from '../types/conversation.types';
import type { Message } from '../types/message.types';

export class ConversationEngine {
  private router = new MessageRouter();
  private contextManager = new ContextManager();
  private memory = new ConversationMemory();
  private validator = new ConversationValidator();

  async processMessage(conversation: Conversation, message: Message) {
    const errors = this.validator.validateMessage(message);
    if (errors.length > 0) throw new Error(errors.join(', '));

    const context = this.contextManager.buildContext(conversation);

    return this.router.route({
      id: `req-${Date.now()}`,
      providerId: conversation.provider,
      modelId: conversation.model,
      messages: context.messages,
      systemPrompt: context.systemPrompt,
      temperature: context.temperature,
      maxTokens: context.maxTokens,
      metadata: context.metadata
    });
  }

  async processStreamingMessage(conversation: Conversation, message: Message, handlers: any) {
    const context = this.contextManager.buildContext(conversation);

    return this.router.routeStream({
      id: `req-${Date.now()}`,
      providerId: conversation.provider,
      modelId: conversation.model,
      messages: context.messages,
      systemPrompt: context.systemPrompt,
      temperature: context.temperature,
      maxTokens: context.maxTokens,
      metadata: context.metadata,
      stream: true
    }, handlers);
  }
}

export const conversationEngine = new ConversationEngine();
