import React from 'react';

const CaptionToolbar: React.FC = () => {
  return (
    <div className="caption-toolbar" style={{ height: '40px', background: '#111', borderBottom: '1px solid #333', display: 'flex', alignItems: 'center', padding: '0 16px', gap: '16px' }}>
      <button style={{ background: '#222', color: '#fff', border: 'none', padding: '4px 12px', borderRadius: '4px', fontSize: '12px' }}>+ Add Block</button>
      <button style={{ background: '#222', color: '#fff', border: 'none', padding: '4px 12px', borderRadius: '4px', fontSize: '12px' }}>Split</button>
      <button style={{ background: '#222', color: '#fff', border: 'none', padding: '4px 12px', borderRadius: '4px', fontSize: '12px' }}>Merge</button>
    </div>
  );
};

export default CaptionToolbar;
