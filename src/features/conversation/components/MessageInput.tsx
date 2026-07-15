import React, { useState } from 'react';
import { Button } from '../../../components/ui/Button';
import { colors } from '../../../styles/colors';
import { spacing } from '../../../styles/spacing';

interface MessageInputProps {
  onSend: (content: string) => void;
  disabled?: boolean;
}

export const MessageInput: React.FC<MessageInputProps> = ({ onSend, disabled }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && !disabled) {
      onSend(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: spacing.sm, padding: spacing.md, borderTop: `1px solid ${colors.border.light}` }}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        disabled={disabled}
        style={{
          flexGrow: 1,
          padding: spacing.sm,
          borderRadius: 8,
          border: `1px solid ${colors.border.main}`,
          backgroundColor: colors.background.light,
          color: colors.text.primary,
          resize: 'none',
          height: 40,
          outline: 'none'
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
          }
        }}
      />
      <Button type="submit" variant="primary" disabled={disabled || !text.trim()}>
        Send
      </Button>
    </form>
  );
};
