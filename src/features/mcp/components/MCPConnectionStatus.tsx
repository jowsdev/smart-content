import React from 'react';
import type { MCPServerStatus } from '../types/server.types';
import { colors } from '../../../styles/colors';

interface MCPConnectionStatusProps {
  status: MCPServerStatus;
}

export const MCPConnectionStatus: React.FC<MCPConnectionStatusProps> = ({ status }) => {
  const getColor = () => {
    switch (status) {
      case 'connected': return colors.success.main;
      case 'error': return colors.error.main;
      case 'connecting': return colors.primary.main;
      default: return colors.text.muted;
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.875rem' }}>
      <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: getColor() }} />
      <span style={{ color: colors.text.secondary }}>{status.toUpperCase()}</span>
    </div>
  );
};
