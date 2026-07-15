import React from 'react';
import { colors } from '../../../styles/colors';

interface ChatLayoutProps {
  sidebar: React.ReactNode;
  content: React.ReactNode;
  rightPanel?: React.ReactNode;
}

export const ChatLayout: React.FC<ChatLayoutProps> = ({ sidebar, content, rightPanel }) => {
  return (
    <div style={{
      display: 'flex',
      height: 'calc(100vh - 120px)', // Adjust for header/footer
      overflow: 'hidden',
      border: `1px solid ${colors.border.light}`,
      borderRadius: 8,
      backgroundColor: colors.background.light
    }}>
      {sidebar}
      <div style={{ flexGrow: 1, height: '100%' }}>{content}</div>
      {rightPanel && <div style={{ width: 300, height: '100%', borderLeft: `1px solid ${colors.border.light}` }}>{rightPanel}</div>}
    </div>
  );
};
