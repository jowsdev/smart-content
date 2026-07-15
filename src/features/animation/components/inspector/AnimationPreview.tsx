import React from 'react';

const AnimationPreview: React.FC = () => {
  return (
    <div className="animation-preview" style={{ padding: '20px', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px', borderBottom: '1px solid #333' }}>
      <div style={{ width: '40px', height: '40px', background: '#ff0055', borderRadius: '4px' }} />
    </div>
  );
};

export default AnimationPreview;
