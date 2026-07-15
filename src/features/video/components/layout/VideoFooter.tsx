import React from 'react';

const VideoFooter: React.FC = () => {
  return (
    <footer className="video-footer" style={{
      height: '32px',
      borderTop: '1px solid #333',
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      fontSize: '12px',
      color: '#888'
    }}>
      <span>Smart Content Video Engine v1.0</span>
      <span style={{ marginLeft: 'auto' }}>Rendering: Idle</span>
    </footer>
  );
};

export default VideoFooter;
