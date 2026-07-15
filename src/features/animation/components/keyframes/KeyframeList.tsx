import React from 'react';

const KeyframeList: React.FC = () => {
  return (
    <div className="keyframe-list" style={{ padding: '16px' }}>
      <h4 style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>Active Keyframes</h4>
      <div style={{ display: 'flex', gap: '4px' }}>
        <div style={{ width: '8px', height: '8px', background: '#fff', transform: 'rotate(45deg)' }} />
        <div style={{ width: '8px', height: '8px', background: '#fff', transform: 'rotate(45deg)' }} />
      </div>
    </div>
  );
};

export default KeyframeList;
