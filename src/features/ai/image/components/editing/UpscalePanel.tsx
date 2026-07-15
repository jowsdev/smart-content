import React from 'react';

const UpscalePanel: React.FC = () => {
  return (
    <div className="upscale-panel" style={{ padding: '16px', borderBottom: '1px solid #333' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Upscale & Enhance</h3>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button style={{ flex: 1, background: '#222', color: '#fff', border: 'none', padding: '8px', borderRadius: '4px' }}>2x</button>
        <button style={{ flex: 1, background: '#222', color: '#fff', border: 'none', padding: '8px', borderRadius: '4px' }}>4x</button>
      </div>
    </div>
  );
};

export default UpscalePanel;
