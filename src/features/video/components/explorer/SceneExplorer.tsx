import React from 'react';

const SceneExplorer: React.FC = () => {
  return (
    <div className="scene-explorer" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Scenes</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ padding: '8px', background: '#333', borderRadius: '4px', marginBottom: '4px' }}>01. Intro</li>
        <li style={{ padding: '8px', borderRadius: '4px', marginBottom: '4px' }}>02. Main Feature</li>
        <li style={{ padding: '8px', borderRadius: '4px', marginBottom: '4px' }}>03. Outro</li>
      </ul>
    </div>
  );
};

export default SceneExplorer;
