import React, { useRef, useEffect } from 'react';
import type { Message } from '../types/message.types';
import { MessageBubble } from './MessageBubble';
import { spacing } from '../../../styles/spacing';

interface MessageListProps {
  messages: Message[];
  streamedContent?: string;
}

export const MessageList: React.FC<MessageListProps> = ({ messages, streamedContent }) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, streamedContent]);

  return (
    <div style={{ flexGrow: 1, overflowY: 'auto', padding: spacing.lg }}>
      {messages.map(msg => (
        <MessageBubble key={msg.id} message={msg} />
      ))}

      {streamedContent && (
        <MessageBubble
          message={{
            id: 'streaming-msg',
            conversationId: 'temp',
            role: 'assistant',
            content: streamedContent,
            timestamp: new Date().toISOString(),
            status: 'streaming'
          }}
        />
      )}

      <div ref={bottomRef} />
    </div>
  );
};
