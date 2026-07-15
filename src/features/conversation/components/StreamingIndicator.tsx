import React from 'react';
import { Spinner } from '../../../components/ui/Spinner';
import { colors } from '../../../styles/colors';
import { spacing } from '../../../styles/spacing';

export const StreamingIndicator: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: spacing.sm, color: colors.primary.main, fontSize: '0.875rem' }}>
      <Spinner size="small" />
      <span>AI is generating...</span>
    </div>
  );
};
