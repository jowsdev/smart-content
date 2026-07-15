import React from 'react';

const SceneTemplates: React.FC = () => {
  return (
    <div className="scene-templates" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Scene Templates</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ padding: '10px', background: '#222', borderRadius: '4px', fontSize: '12px' }}>Modern Title</div>
        <div style={{ padding: '10px', background: '#222', borderRadius: '4px', fontSize: '12px' }}>Side-by-Side Video</div>
      </div>
    </div>
  );
};

export default SceneTemplates;
