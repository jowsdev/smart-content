import React from 'react';

const GenerationQueue: React.FC = () => {
  return (
    <div className="generation-queue" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px', color: '#888' }}>Recent Audio</h3>
      <div style={{ padding: '10px', background: '#1a1a1a', borderRadius: '4px', fontSize: '12px' }}>
        "Welcome to Smart Content..." - v1.mp3
      </div>
    </div>
  );
};

export default GenerationQueue;
