import React from 'react';

const MusicLibrary: React.FC = () => {
  return (
    <div className="music-library" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px', color: '#888' }}>Background Music</h3>
      <div style={{ padding: '10px', background: '#1a1a1a', borderRadius: '4px', fontSize: '12px' }}>
        Corporate Uplifting.mp3
      </div>
    </div>
  );
};

export default MusicLibrary;
