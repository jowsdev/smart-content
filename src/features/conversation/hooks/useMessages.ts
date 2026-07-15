import { useState, useCallback } from 'react';
import { messageService } from '../services/message.service';
import type { Conversation } from '../types/conversation.types';
import type { Message } from '../types/message.types';

export function useMessages(conversation: Conversation | null) {
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const sendMessage = useCallback(async (content: string) => {
    if (!conversation) return;

    setIsSending(true);
    setError(null);
    try {
      await messageService.sendMessage(conversation, content);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to send message'));
    } finally {
      setIsSending(false);
    }
  }, [conversation]);

  return { sendMessage, isSending, error, messages: conversation?.messages || [] };
}
