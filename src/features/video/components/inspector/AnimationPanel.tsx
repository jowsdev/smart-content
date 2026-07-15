import React from 'react';

const AnimationPanel: React.FC = () => {
  return (
    <div className="animation-panel" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Animations</h3>
      <button style={{ width: '100%', background: '#333', color: 'white', border: 'none', padding: '8px', borderRadius: '4px' }}>+ Add Animation</button>
    </div>
  );
};

export default AnimationPanel;
