import React from 'react';

const VariantsPanel: React.FC = () => {
  return (
    <div className="variants-panel" style={{ padding: '16px', borderBottom: '1px solid #333' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Generate Variants</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        <div style={{ aspectRatio: '1', background: '#222', borderRadius: '4px' }} />
        <div style={{ aspectRatio: '1', background: '#222', borderRadius: '4px' }} />
      </div>
      <button style={{ width: '100%', marginTop: '12px', background: '#333', color: '#fff', border: 'none', padding: '8px', borderRadius: '4px' }}>
        Create 4 new versions
      </button>
    </div>
  );
};

export default VariantsPanel;
