import React from 'react';

const SceneAssets: React.FC = () => {
  return (
    <div className="scene-assets" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Assets in Scene</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        <div style={{ aspectRatio: '1', background: '#333', borderRadius: '4px' }} />
      </div>
    </div>
  );
};

export default SceneAssets;
