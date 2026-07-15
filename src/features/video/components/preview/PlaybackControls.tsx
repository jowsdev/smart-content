import React from 'react';

const PlaybackControls: React.FC = () => {
  return (
    <div className="playback-controls" style={{
      height: '48px',
      background: 'rgba(0,0,0,0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '24px'
    }}>
      <button style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>⏮</button>
      <button style={{
        background: '#fff',
        border: 'none',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>▶</button>
      <button style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>⏭</button>
      <div className="timecode" style={{ fontFamily: 'monospace', fontSize: '14px' }}>
        00:00:00:00
      </div>
    </div>
  );
};

export default PlaybackControls;
