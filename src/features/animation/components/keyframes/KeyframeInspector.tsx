import React from 'react';

const KeyframeInspector: React.FC = () => {
  return (
    <div className="keyframe-inspector" style={{ padding: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <label>Value</label>
        <input type="number" defaultValue={0} style={{ width: '60px', background: '#333', color: '#fff', border: 'none' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>Frame</label>
        <input type="number" defaultValue={0} style={{ width: '60px', background: '#333', color: '#fff', border: 'none' }} />
      </div>
    </div>
  );
};

export default KeyframeInspector;
