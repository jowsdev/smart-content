import React from 'react';

const EffectsPanel: React.FC = () => {
  return (
    <div className="effects-panel" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Effects</h3>
      <div style={{ color: '#888', fontSize: '12px' }}>No effects applied</div>
    </div>
  );
};

export default EffectsPanel;
