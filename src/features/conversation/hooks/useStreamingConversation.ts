import { useState, useCallback } from 'react';
import { conversationEngine } from '../engine/ConversationEngine';
import type { Conversation } from '../types/conversation.types';
import type { Message } from '../types/message.types';

export function useStreamingConversation(conversation: Conversation | null) {
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamedContent, setStreamedContent] = useState('');

  const sendStreamingMessage = useCallback(async (content: string) => {
    if (!conversation) return;

    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      conversationId: conversation.id,
      role: 'user',
      content,
      timestamp: new Date().toISOString(),
      status: 'sent'
    };

    conversation.messages.push(userMessage);
    setIsStreaming(true);
    setStreamedContent('');

    const assistantMsgId = `msg-assistant-${Date.now()}`;

    try {
      await conversationEngine.processStreamingMessage(conversation, userMessage, {
        onChunk: (chunk: any) => {
          setStreamedContent(prev => prev + chunk.delta);
        },
        onComplete: (res: any) => {
          const assistantMessage: Message = {
            id: assistantMsgId,
            conversationId: conversation.id,
            role: 'assistant',
            content: streamedContent + (res.content || ''),
            timestamp: new Date().toISOString(),
            status: 'sent'
          };
          conversation.messages.push(assistantMessage);
          setIsStreaming(false);
        },
        onError: () => setIsStreaming(false)
      });
    } catch {
      setIsStreaming(false);
    }
  }, [conversation, streamedContent]);

  return { sendStreamingMessage, isStreaming, streamedContent };
}
