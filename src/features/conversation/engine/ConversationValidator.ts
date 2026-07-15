import type { Message } from '../types/message.types';

export class ConversationValidator {
  validateMessage(message: Partial<Message>): string[] {
    const errors: string[] = [];
    if (!message.content?.trim()) {
      errors.push('Message content cannot be empty.');
    }
    if (!message.role) {
      errors.push('Message role is required.');
    }
    return errors;
  }
}
