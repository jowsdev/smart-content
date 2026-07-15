import React from 'react';

const GenerationQueue: React.FC = () => {
  return (
    <div className="generation-queue" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px', color: '#888' }}>Generation Queue</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ padding: '10px', background: '#1a1a1a', borderRadius: '4px', fontSize: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Job #123</span>
            <span style={{ color: '#0070f3' }}>Processing...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerationQueue;
