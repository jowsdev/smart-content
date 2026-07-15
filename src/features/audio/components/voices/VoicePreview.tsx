import React from 'react';

const VoicePreview: React.FC = () => {
  return (
    <div className="voice-preview" style={{ padding: '16px', background: '#111', borderRadius: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#0070f3', border: 'none', color: 'white' }}>▶</button>
        <div style={{ flex: 1, height: '4px', background: '#333', borderRadius: '2px' }} />
      </div>
    </div>
  );
};

export default VoicePreview;
