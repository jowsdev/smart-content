import React from 'react';

const SoundEffectsLibrary: React.FC = () => {
  return (
    <div className="sfx-library" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px', color: '#888' }}>Sound Effects</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        <div style={{ padding: '8px', background: '#222', borderRadius: '4px', fontSize: '11px', textAlign: 'center' }}>Swoosh</div>
        <div style={{ padding: '8px', background: '#222', borderRadius: '4px', fontSize: '11px', textAlign: 'center' }}>Ding</div>
      </div>
    </div>
  );
};

export default SoundEffectsLibrary;
