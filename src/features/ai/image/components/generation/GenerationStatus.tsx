import React from 'react';

const GenerationStatus: React.FC = () => {
  return (
    <div className="generation-status" style={{ padding: '16px', background: '#111', borderRadius: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '20px', height: '20px', border: '2px solid #0070f3', borderTopColor: 'transparent', borderRadius: '50%' }} />
        <span>Generating image... 45%</span>
      </div>
    </div>
  );
};

export default GenerationStatus;
