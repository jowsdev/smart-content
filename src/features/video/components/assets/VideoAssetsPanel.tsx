import React from 'react';

const VideoAssetsPanel: React.FC = () => {
  return (
    <div className="video-assets-panel" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Assets</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        <div style={{ aspectRatio: '1', background: '#333', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🎬</div>
        <div style={{ aspectRatio: '1', background: '#333', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🎵</div>
        <div style={{ aspectRatio: '1', background: '#333', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🖼️</div>
      </div>
    </div>
  );
};

export default VideoAssetsPanel;
