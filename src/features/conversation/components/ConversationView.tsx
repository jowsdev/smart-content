import React from 'react';
import type { Conversation } from '../types/conversation.types';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { StreamingIndicator } from './StreamingIndicator';
import { spacing } from '../../../styles/spacing';
import { colors } from '../../../styles/colors';

interface ConversationViewProps {
  conversation: Conversation;
  onSend: (content: string) => void;
  isStreaming?: boolean;
  streamedContent?: string;
}

export const ConversationView: React.FC<ConversationViewProps> = ({
  conversation,
  onSend,
  isStreaming,
  streamedContent
}) => {
  return (
    <div style={{
      flexGrow: 1,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: colors.background.main
    }}>
      <MessageList
        messages={conversation.messages}
        streamedContent={streamedContent}
      />

      <div style={{ padding: `${spacing.xs} ${spacing.lg}` }}>
        {isStreaming && <StreamingIndicator />}
      </div>

      <MessageInput onSend={onSend} disabled={isStreaming} />
    </div>
  );
};
