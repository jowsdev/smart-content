import React from 'react';

const CaptionsPanel: React.FC = () => {
  return (
    <div className="captions-panel" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Captions</h3>
      <button style={{ width: '100%', background: '#333', color: 'white', border: 'none', padding: '8px', borderRadius: '4px' }}>Generate Captions</button>
    </div>
  );
};

export default CaptionsPanel;
