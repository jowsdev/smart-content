import React from 'react';

const AudioPlayer: React.FC = () => {
  return (
    <div className="audio-player" style={{ padding: '16px', background: '#000', display: 'flex', alignItems: 'center', gap: '20px' }}>
      <div style={{ display: 'flex', gap: '12px' }}>
        <button style={{ background: 'transparent', border: 'none', color: '#fff' }}>⏮</button>
        <button style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#fff', border: 'none', color: '#000' }}>▶</button>
        <button style={{ background: 'transparent', border: 'none', color: '#fff' }}>⏭</button>
      </div>
      <div style={{ flex: 1, height: '2px', background: '#333', position: 'relative' }}>
        <div style={{ position: 'absolute', left: '30%', width: '8px', height: '8px', background: '#0070f3', borderRadius: '50%', top: '-3px' }} />
      </div>
      <span style={{ fontFamily: 'monospace', fontSize: '12px' }}>00:12 / 01:30</span>
    </div>
  );
};

export default AudioPlayer;
