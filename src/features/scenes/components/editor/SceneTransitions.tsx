import React from 'react';

const SceneTransitions: React.FC = () => {
  return (
    <div className="scene-transitions" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Transitions</h3>
      <div style={{ padding: '8px', background: '#1a1a1a', border: '1px solid #333', borderRadius: '4px', fontSize: '12px' }}>
        Fade (0.5s)
      </div>
    </div>
  );
};

export default SceneTransitions;
