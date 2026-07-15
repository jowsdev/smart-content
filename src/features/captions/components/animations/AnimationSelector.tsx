import React from 'react';

const AnimationSelector: React.FC = () => {
  return (
    <div className="animation-selector" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Word Animations</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        <button style={{ background: '#222', border: '1px solid #333', color: '#fff', padding: '6px 10px', fontSize: '11px', borderRadius: '4px' }}>Pop</button>
        <button style={{ background: '#222', border: '1px solid #333', color: '#fff', padding: '6px 10px', fontSize: '11px', borderRadius: '4px' }}>Glow</button>
      </div>
    </div>
  );
};

export default AnimationSelector;
