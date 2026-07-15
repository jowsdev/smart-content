import React from 'react';
import type { Conversation } from '../types/conversation.types';
import { colors } from '../../../styles/colors';
import { spacing } from '../../../styles/spacing';

interface ConversationHeaderProps {
  conversation: Conversation;
}

export const ConversationHeader: React.FC<ConversationHeaderProps> = ({ conversation }) => {
  return (
    <div style={{
      padding: `${spacing.sm} ${spacing.lg}`,
      borderBottom: `1px solid ${colors.border.light}`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.background.light
    }}>
      <div>
        <h3 style={{ margin: 0, fontSize: '1rem' }}>{conversation.title}</h3>
        <div style={{ fontSize: '0.75rem', color: colors.text.muted }}>
          {conversation.provider} / {conversation.model}
        </div>
      </div>
    </div>
  );
};
