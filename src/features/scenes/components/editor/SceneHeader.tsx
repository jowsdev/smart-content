import React from 'react';

const SceneHeader: React.FC = () => {
  return (
    <div className="scene-header" style={{ height: '48px', borderBottom: '1px solid #333', display: 'flex', alignItems: 'center', padding: '0 16px', justifyContent: 'space-between', background: '#111' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button style={{ background: 'transparent', border: 'none', color: '#fff' }}>←</button>
        <strong>Untitled Scene</strong>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button style={{ background: '#333', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px' }}>Draft</button>
        <button style={{ background: '#0070f3', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px' }}>Save</button>
      </div>
    </div>
  );
};

export default SceneHeader;
