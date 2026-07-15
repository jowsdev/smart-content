import React from 'react';
import type { Conversation } from '../types/conversation.types';
import { Card } from '../../../components/ui/Card';
import { Select } from '../../../components/ui/Select';
import { spacing } from '../../../styles/spacing';

interface ConversationSettingsProps {
  conversation: Conversation;
  onUpdate: (settings: Partial<Conversation['settings']>) => void;
}

export const ConversationSettings: React.FC<ConversationSettingsProps> = ({
  conversation,
  onUpdate: _onUpdate
}) => {
  return (
    <Card padding="medium">
      <h4 style={{ marginTop: 0 }}>Chat Settings</h4>
      <div style={{ display: 'grid', gap: spacing.md }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, marginBottom: spacing.xs }}>Provider</label>
          <Select
            options={[{label: 'OpenAI', value: 'openai'}, {label: 'Anthropic', value: 'anthropic'}]}
            value={conversation.provider}
            onChange={() => {}}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, marginBottom: spacing.xs }}>Temperature</label>
          <input
            type="range"
            min="0" max="1" step="0.1"
            defaultValue={conversation.settings.temperature}
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label style={{ display: 'flex', alignItems: 'center', gap: spacing.sm, fontSize: '0.75rem' }}>
            <input type="checkbox" defaultChecked={conversation.settings.stream} />
            Enable Streaming
          </label>
        </div>
      </div>
    </Card>
  );
};
