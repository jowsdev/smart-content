import React from 'react';

const VideoSidebar: React.FC = () => {
  return (
    <aside className="video-sidebar" style={{
      width: '64px',
      borderRight: '1px solid #333',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '16px 0',
      gap: '24px'
    }}>
      <div title="Explorer">📁</div>
      <div title="Assets">🎞️</div>
      <div title="Templates">📑</div>
      <div title="Settings">⚙️</div>
    </aside>
  );
};

export default VideoSidebar;
