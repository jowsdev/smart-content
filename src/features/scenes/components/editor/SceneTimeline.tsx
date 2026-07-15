import React from 'react';

const SceneTimeline: React.FC = () => {
  return (
    <div className="scene-timeline" style={{ height: '180px', background: '#111', borderTop: '1px solid #333', padding: '12px' }}>
      <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Scene Timeline</div>
      <div style={{ width: '100%', height: '40px', background: '#1a1a1a', border: '1px solid #222' }} />
    </div>
  );
};

export default SceneTimeline;
