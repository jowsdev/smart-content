import React from 'react';

const SceneVariables: React.FC = () => {
  return (
    <div className="scene-variables" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Scene Variables</h3>
      <div style={{ fontSize: '12px', color: '#0070f3' }}>{'{title}'}</div>
      <div style={{ fontSize: '12px', color: '#0070f3' }}>{'{subtitle}'}</div>
    </div>
  );
};

export default SceneVariables;
