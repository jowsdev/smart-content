import React from 'react';

interface ImageStudioLayoutProps {
  children: React.ReactNode;
}

const ImageStudioLayout: React.FC<ImageStudioLayoutProps> = ({ children }) => {
  return (
    <div className="image-studio-layout" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      background: '#0a0a0a',
      color: '#fff',
      overflow: 'hidden'
    }}>
      <header style={{ height: '56px', borderBottom: '1px solid #333', display: 'flex', alignItems: 'center', padding: '0 20px', background: '#111' }}>
        <strong>AI Image Studio</strong>
      </header>
      <main style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {children}
      </main>
    </div>
  );
};

export default ImageStudioLayout;
