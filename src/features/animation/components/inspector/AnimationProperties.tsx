import React from 'react';

const AnimationProperties: React.FC = () => {
  return (
    <div className="animation-properties" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Properties</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Duration</span>
          <span>60f</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Delay</span>
          <span>0f</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Loop</span>
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
};

export default AnimationProperties;
