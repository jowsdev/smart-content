import React from 'react';

const AudioPanel: React.FC = () => {
  return (
    <div className="audio-panel" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Audio</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Volume</span>
        <input type="range" min="0" max="100" defaultValue="100" style={{ flex: 1 }} />
      </div>
    </div>
  );
};

export default AudioPanel;
