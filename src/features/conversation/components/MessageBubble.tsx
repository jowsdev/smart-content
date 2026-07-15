import React from 'react';
import type { Message } from '../types/message.types';
import { colors } from '../../../styles/colors';
import { spacing } from '../../../styles/spacing';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div style={{
      display: 'flex',
      justifyContent: isUser ? 'flex-end' : 'flex-start',
      marginBottom: spacing.md,
      width: '100%'
    }}>
      <div style={{
        maxWidth: '70%',
        padding: spacing.md,
        borderRadius: 12,
        backgroundColor: isUser ? colors.primary.main : colors.background.light,
        color: isUser ? colors.primary.contrastText : colors.text.primary,
        border: isUser ? 'none' : `1px solid ${colors.border.light}`,
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        position: 'relative'
      }}>
        <div style={{ fontSize: '0.875rem', whiteSpace: 'pre-wrap' }}>
          {message.content}
        </div>
        <div style={{
          fontSize: '0.625rem',
          marginTop: spacing.xs,
          textAlign: 'right',
          opacity: 0.7
        }}>
          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          {message.provider && ` • ${message.provider}`}
        </div>
      </div>
    </div>
  );
};
