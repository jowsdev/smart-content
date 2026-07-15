import React from 'react';

const TTSSettings: React.FC = () => {
  return (
    <div className="tts-settings" style={{ padding: '20px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '16px' }}>Audio Settings</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '12px', color: '#888', marginBottom: '8px' }}>Stability</label>
          <input type="range" min="0" max="100" defaultValue="50" style={{ width: '100%' }} />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '12px', color: '#888', marginBottom: '8px' }}>Clarity + Similarity</label>
          <input type="range" min="0" max="100" defaultValue="75" style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default TTSSettings;
