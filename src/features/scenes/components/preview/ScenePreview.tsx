import React from 'react';

const ScenePreview: React.FC = () => {
  return (
    <div className="scene-preview" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000' }}>
      <div style={{ width: '80%', aspectRatio: '16/9', background: '#1a1a1a', border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: '#444', fontSize: '24px' }}>Scene Preview Area</span>
      </div>
    </div>
  );
};

export default ScenePreview;
