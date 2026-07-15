import React from 'react';

const SceneExplorer: React.FC = () => {
  return (
    <div className="scene-explorer" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '16px', color: '#888' }}>Explorer</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ padding: '8px', borderRadius: '4px' }}>All Scenes</div>
        <div style={{ padding: '8px', borderRadius: '4px' }}>Intro Templates</div>
        <div style={{ padding: '8px', borderRadius: '4px' }}>Motion Graphics</div>
        <div style={{ padding: '8px', borderRadius: '4px' }}>Transitions</div>
      </div>
    </div>
  );
};

export default SceneExplorer;
