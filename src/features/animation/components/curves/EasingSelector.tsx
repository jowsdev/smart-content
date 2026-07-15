import React from 'react';

const EasingSelector: React.FC = () => {
  return (
    <div className="easing-selector" style={{ padding: '16px' }}>
      <select style={{ width: '100%', background: '#333', color: '#fff', border: 'none', padding: '8px' }}>
        <option>Linear</option>
        <option>Ease In</option>
        <option>Ease Out</option>
        <option>Ease In Out</option>
        <option>Bounce</option>
        <option>Spring</option>
      </select>
    </div>
  );
};

export default EasingSelector;
