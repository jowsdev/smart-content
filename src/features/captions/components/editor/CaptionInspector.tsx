import React from 'react';

const CaptionInspector: React.FC = () => {
  return (
    <div className="caption-inspector" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Block Properties</h3>
      <textarea style={{ width: '100%', height: '80px', background: '#111', border: '1px solid #333', padding: '8px', color: '#fff', fontSize: '13px' }} defaultValue="Welcome to Smart Content." />
    </div>
  );
};

export default CaptionInspector;
