import React from 'react';
import { colors } from '../../../styles/colors';
import { spacing } from '../../../styles/spacing';

export const TypingIndicator: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: 4, padding: spacing.sm, alignItems: 'center' }}>
      <div className="dot" style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: colors.text.muted, animation: 'bounce 1.4s infinite ease-in-out' }} />
      <div className="dot" style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: colors.text.muted, animation: 'bounce 1.4s infinite ease-in-out 0.2s' }} />
      <div className="dot" style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: colors.text.muted, animation: 'bounce 1.4s infinite ease-in-out 0.4s' }} />
      <style>{`
        @keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1.0); } }
      `}</style>
    </div>
  );
};
