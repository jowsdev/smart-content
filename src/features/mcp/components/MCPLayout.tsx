import React from 'react';
import { colors } from '../../../styles/colors';

interface MCPLayoutProps {
  sidebar: React.ReactNode;
  content: React.ReactNode;
}

export const MCPLayout: React.FC<MCPLayoutProps> = ({ sidebar, content }) => {
  return (
    <div style={{ display: 'flex', height: '100%', border: `1px solid ${colors.border.light}`, borderRadius: 8, overflow: 'hidden' }}>
      <div style={{ width: 280, borderRight: `1px solid ${colors.border.light}`, backgroundColor: colors.background.light }}>
        {sidebar}
      </div>
      <div style={{ flexGrow: 1, backgroundColor: colors.background.main, overflowY: 'auto' }}>
        {content}
      </div>
    </div>
  );
};
