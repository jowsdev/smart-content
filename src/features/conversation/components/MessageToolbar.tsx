import React from 'react';
import { Button } from '../../../components/ui/Button';
import { spacing } from '../../../styles/spacing';

export const MessageToolbar: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: spacing.xs, padding: `0 ${spacing.md} ${spacing.xs} ${spacing.md}` }}>
      <Button variant="ghost" size="small">Attach</Button>
      <Button variant="ghost" size="small">Templates</Button>
      <Button variant="ghost" size="small">Variables</Button>
    </div>
  );
};
