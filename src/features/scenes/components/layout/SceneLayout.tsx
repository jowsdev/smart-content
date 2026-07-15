import React from 'react';

interface SceneLayoutProps {
  children: React.ReactNode;
}

const SceneLayout: React.FC<SceneLayoutProps> = ({ children }) => {
  return (
    <div className="scene-layout" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      background: '#0a0a0a',
      color: '#fff',
      overflow: 'hidden'
    }}>
      <header style={{ height: '48px', borderBottom: '1px solid #333', display: 'flex', alignItems: 'center', padding: '0 16px', background: '#111' }}>
        <strong>Scene Builder</strong>
      </header>
      <main style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {children}
      </main>
    </div>
  );
};

export default SceneLayout;
