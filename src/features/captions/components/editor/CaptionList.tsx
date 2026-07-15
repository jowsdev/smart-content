import React from 'react';

const CaptionList: React.FC = () => {
  return (
    <div className="caption-list" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '16px', color: '#888' }}>Timeline Blocks</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ background: '#1a1a1a', padding: '12px', borderRadius: '4px', border: '1px solid #333' }}>
          <div style={{ fontSize: '11px', color: '#0070f3', marginBottom: '4px' }}>00:00 - 00:05</div>
          <div style={{ fontSize: '13px' }}>Welcome to Smart Content.</div>
        </div>
      </div>
    </div>
  );
};

export default CaptionList;
