import React from 'react';

interface AudioStudioLayoutProps {
  children: React.ReactNode;
}

const AudioStudioLayout: React.FC<AudioStudioLayoutProps> = ({ children }) => {
  return (
    <div className="audio-studio-layout" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      background: '#0a0a0a',
      color: '#fff',
      overflow: 'hidden'
    }}>
      <header style={{ height: '48px', borderBottom: '1px solid #333', display: 'flex', alignItems: 'center', padding: '0 16px', background: '#111' }}>
        <strong>Voice & Audio Studio</strong>
      </header>
      <main style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {children}
      </main>
    </div>
  );
};

export default AudioStudioLayout;
