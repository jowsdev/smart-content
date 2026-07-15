import React from 'react';

const VideoHeader: React.FC = () => {
  return (
    <header className="video-header" style={{
      height: '48px',
      borderBottom: '1px solid #333',
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      justifyContent: 'space-between'
    }}>
      <div className="header-left">
        <strong>Video Studio</strong>
      </div>
      <div className="header-center">
        <span>Project: My Awesome Video</span>
      </div>
      <div className="header-right" style={{ display: 'flex', gap: '8px' }}>
        <button style={{ background: '#333', color: 'white', border: 'none', padding: '4px 12px', borderRadius: '4px' }}>Save</button>
        <button style={{ background: '#0070f3', color: 'white', border: 'none', padding: '4px 12px', borderRadius: '4px' }}>Export</button>
      </div>
    </header>
  );
};

export default VideoHeader;
