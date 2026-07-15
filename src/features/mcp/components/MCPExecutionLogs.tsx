import React from 'react';
import { colors } from '../../../styles/colors';
import { spacing } from '../../../styles/spacing';

export const MCPExecutionLogs: React.FC = () => {
  return (
    <div style={{
      backgroundColor: '#1e1e1e',
      color: '#d4d4d4',
      padding: spacing.md,
      borderRadius: 4,
      fontFamily: 'monospace',
      fontSize: '0.75rem',
      height: 200,
      overflowY: 'auto'
    }}>
      <div>[INFO] MCP Engine initialized</div>
      <div>[INFO] Local Filesystem server connected</div>
      <div>[DEBUG] Tool read_file discovered</div>
    </div>
  );
};
