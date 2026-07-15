import React from 'react';
import type { ConversationSummary } from '../types/conversation.types';
import { colors } from '../../../styles/colors';
import { spacing } from '../../../styles/spacing';

interface ConversationListProps {
  conversations: ConversationSummary[];
  activeId?: string;
  onSelect: (id: string) => void;
}

export const ConversationList: React.FC<ConversationListProps> = ({
  conversations,
  activeId,
  onSelect
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {conversations.map(conv => (
        <button
          key={conv.id}
          onClick={() => onSelect(conv.id)}
          style={{
            display: 'block',
            width: '100%',
            textAlign: 'left',
            padding: `${spacing.sm} ${spacing.md}`,
            border: 'none',
            borderRadius: 4,
            backgroundColor: activeId === conv.id ? colors.primary.light + '22' : 'transparent',
            color: activeId === conv.id ? colors.primary.main : colors.text.primary,
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
        >
          <div style={{ fontWeight: 600, fontSize: '0.875rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {conv.title}
          </div>
          <div style={{ fontSize: '0.75rem', color: colors.text.muted }}>
            {new Date(conv.lastMessageAt).toLocaleDateString()}
          </div>
        </button>
      ))}
    </div>
  );
};
