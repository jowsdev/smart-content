import React from 'react';

interface AnimationLayoutProps {
  children: React.ReactNode;
}

const AnimationLayout: React.FC<AnimationLayoutProps> = ({ children }) => {
  return (
    <div className="animation-layout" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      background: '#0a0a0a',
      color: '#fff',
      overflow: 'hidden'
    }}>
      <header style={{ height: '40px', borderBottom: '1px solid #333', display: 'flex', alignItems: 'center', padding: '0 16px' }}>
        <strong>Animation Studio</strong>
      </header>
      <main style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {children}
      </main>
    </div>
  );
};

export default AnimationLayout;
