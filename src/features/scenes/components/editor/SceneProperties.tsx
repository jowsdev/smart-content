import React from 'react';

const SceneProperties: React.FC = () => {
  return (
    <div className="scene-properties" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Properties</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <label style={{ fontSize: '12px', color: '#888' }}>Duration (frames)</label>
          <input type="number" defaultValue={300} style={{ width: '100%', background: '#111', border: '1px solid #333', padding: '8px', color: '#fff' }} />
        </div>
      </div>
    </div>
  );
};

export default SceneProperties;
