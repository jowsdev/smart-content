import React from 'react';

const CompositionInspector: React.FC = () => {
  return (
    <div className="composition-inspector" style={{ padding: '16px', background: '#111' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Remotion Inspector</h3>
      <div style={{ fontSize: '12px', color: '#888' }}>
        <p>FPS: 30</p>
        <p>Dimensions: 1920x1080</p>
        <p>Duration: 300 frames</p>
      </div>
    </div>
  );
};

export default CompositionInspector;
