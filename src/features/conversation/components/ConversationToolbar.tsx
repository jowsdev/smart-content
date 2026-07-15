import React from 'react';
import { Button } from '../../../components/ui/Button';
import { spacing } from '../../../styles/spacing';

export const ConversationToolbar: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: spacing.xs, padding: spacing.sm }}>
      <Button variant="ghost" size="small">Archive</Button>
      <Button variant="ghost" size="small">Export</Button>
      <Button variant="ghost" size="small" danger>Delete</Button>
    </div>
  );
};
