import React from 'react';
import { ConversationList } from './ConversationList';
import type { ConversationSummary } from '../types/conversation.types';
import { colors } from '../../../styles/colors';
import { spacing } from '../../../styles/spacing';
import { Button } from '../../../components/ui/Button';

interface ConversationSidebarProps {
  conversations: ConversationSummary[];
  activeId?: string;
  onSelect: (id: string) => void;
  onNew: () => void;
}

export const ConversationSidebar: React.FC<ConversationSidebarProps> = ({
  conversations,
  activeId,
  onSelect,
  onNew
}) => {
  return (
    <div style={{
      width: 260,
      height: '100%',
      borderRight: `1px solid ${colors.border.light}`,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: colors.background.light
    }}>
      <div style={{ padding: spacing.md }}>
        <Button variant="primary" fullWidth onClick={onNew}>+ New Chat</Button>
      </div>
      <div style={{ flexGrow: 1, overflowY: 'auto', padding: spacing.xs }}>
        <ConversationList
          conversations={conversations}
          activeId={activeId}
          onSelect={onSelect}
        />
      </div>
    </div>
  );
};
