import React from 'react';
import { Badge } from '../../../components/ui/Badge';
import { colors } from '../../../styles/colors';
import { spacing } from '../../../styles/spacing';

interface TokenUsageProps {
  tokens: number;
  cost?: number;
}

export const TokenUsage: React.FC<TokenUsageProps> = ({ tokens, cost }) => {
  return (
    <div style={{ display: 'flex', gap: spacing.sm, alignItems: 'center', fontSize: '0.75rem', color: colors.text.muted }}>
      <span>Tokens: <strong>{tokens}</strong></span>
      {cost !== undefined && (
        <Badge variant="success" size="small">${cost.toFixed(4)}</Badge>
      )}
    </div>
  );
};
