import React from 'react';
import type { Conversation } from '../types/conversation.types';
import { Badge } from '../../../components/ui/Badge';
import { spacing } from '../../../styles/spacing';
import { colors } from '../../../styles/colors';

interface ContextViewerProps {
  conversation: Conversation;
}

export const ContextViewer: React.FC<ContextViewerProps> = ({ conversation }) => {
  return (
    <div style={{ padding: spacing.md }}>
      <h4 style={{ marginTop: 0 }}>Active Context</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.sm }}>
        <div>
          <span style={{ fontSize: '0.75rem', color: colors.text.muted }}>System Prompt:</span>
          <div style={{
            fontSize: '0.75rem',
            padding: spacing.sm,
            backgroundColor: colors.background.light,
            borderRadius: 4,
            marginTop: 4,
            maxHeight: 100,
            overflowY: 'auto'
          }}>
            {conversation.settings.systemPrompt || 'None'}
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing.xs }}>
          {conversation.agentId && <Badge variant="primary">Agent: {conversation.agentId}</Badge>}
          {conversation.profileId && <Badge variant="secondary">Profile: {conversation.profileId}</Badge>}
          {conversation.projectId && <Badge variant="outline">Project: {conversation.projectId}</Badge>}
        </div>
      </div>
    </div>
  );
};
