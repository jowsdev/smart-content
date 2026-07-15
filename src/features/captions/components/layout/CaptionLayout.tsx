import React from 'react';

interface CaptionLayoutProps {
  children: React.ReactNode;
}

const CaptionLayout: React.FC<CaptionLayoutProps> = ({ children }) => {
  return (
    <div className="caption-layout" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      background: '#0a0a0a',
      color: '#fff',
      overflow: 'hidden'
    }}>
      <header style={{ height: '48px', borderBottom: '1px solid #333', display: 'flex', alignItems: 'center', padding: '0 16px', background: '#111' }}>
        <strong>Caption & Subtitle Studio</strong>
      </header>
      <main style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {children}
      </main>
    </div>
  );
};

export default CaptionLayout;
