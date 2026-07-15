import React from 'react';

interface AssetLayoutProps {
  children: React.ReactNode;
}

const AssetLayout: React.FC<AssetLayoutProps> = ({ children }) => {
  return (
    <div className="asset-layout" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      background: '#0a0a0a',
      color: '#fff',
      overflow: 'hidden'
    }}>
      <header style={{ height: '56px', borderBottom: '1px solid #333', display: 'flex', alignItems: 'center', padding: '0 20px', background: '#111' }}>
        <strong>Media Hub & Asset Pipeline</strong>
      </header>
      <main style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {children}
      </main>
    </div>
  );
};

export default AssetLayout;
