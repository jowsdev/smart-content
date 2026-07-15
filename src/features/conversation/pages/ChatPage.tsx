import React, { useState } from 'react';
import { ChatLayout } from '../components/ChatLayout';
import { ConversationSidebar } from '../components/ConversationSidebar';
import { ConversationView } from '../components/ConversationView';
import { ConversationHeader } from '../components/ConversationHeader';
import { ConversationSettings } from '../components/ConversationSettings';
import { ContextViewer } from '../components/ContextViewer';
import { useConversation } from '../hooks/useConversation';
import { useStreamingConversation } from '../hooks/useStreamingConversation';
import { PageHeader } from '../../../components/ui/PageHeader';
import { spacing } from '../../../styles/spacing';

const ChatPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | undefined>('conv-1');
  const { conversations, activeConversation, create } = useConversation(selectedId);
  const { sendStreamingMessage, isStreaming, streamedContent } = useStreamingConversation(activeConversation);

  const handleNewChat = async () => {
    const newConv = await create({ title: 'New Conversation' });
    setSelectedId(newConv.id);
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <PageHeader
        title="AI Chat"
        description="Interact with agents and profiles in a conversational interface."
      />

      <ChatLayout
        sidebar={
          <ConversationSidebar
            conversations={conversations}
            activeId={selectedId}
            onSelect={setSelectedId}
            onNew={handleNewChat}
          />
        }
        content={
          activeConversation ? (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <ConversationHeader conversation={activeConversation} />
              <ConversationView
                conversation={activeConversation}
                onSend={sendStreamingMessage}
                isStreaming={isStreaming}
                streamedContent={streamedContent}
              />
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#666' }}>
              Select a conversation to start chatting
            </div>
          )
        }
        rightPanel={
          activeConversation && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.md, padding: spacing.sm }}>
              <ContextViewer conversation={activeConversation} />
              <ConversationSettings
                conversation={activeConversation}
                onUpdate={() => {}}
              />
            </div>
          )
        }
      />
    </div>
  );
};

export default ChatPage;
