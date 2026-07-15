import React from 'react';

const SceneLayers: React.FC = () => {
  return (
    <div className="scene-layers" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '16px', color: '#888' }}>Layers</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ background: '#222', padding: '8px', borderRadius: '4px', fontSize: '13px' }}>Text (Headline)</div>
        <div style={{ background: '#222', padding: '8px', borderRadius: '4px', fontSize: '13px' }}>Image (Background)</div>
      </div>
    </div>
  );
};

export default SceneLayers;
