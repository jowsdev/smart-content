import React from 'react';

interface BrandLayoutProps {
  sidebar: React.ReactNode;
  content: React.ReactNode;
}

export const BrandLayout: React.FC<BrandLayoutProps> = ({ sidebar, content }) => {
  return (
    <div style={{ display: 'flex', height: '100%', gap: 24 }}>
      <div style={{ width: 240, flexShrink: 0 }}>{sidebar}</div>
      <div style={{ flexGrow: 1, overflowY: 'auto', paddingBottom: 40 }}>{content}</div>
    </div>
  );
};
