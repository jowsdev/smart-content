import React from 'react';

const AssetExplorer: React.FC = () => {
  return (
    <div className="asset-explorer" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '16px', color: '#888' }}>Explorer</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ padding: '8px', borderRadius: '4px' }}>All Assets</div>
        <div style={{ padding: '8px', borderRadius: '4px' }}>Images</div>
        <div style={{ padding: '8px', borderRadius: '4px' }}>Videos</div>
        <div style={{ padding: '8px', borderRadius: '4px' }}>Fonts</div>
        <div style={{ padding: '8px', borderRadius: '4px' }}>Trash</div>
      </div>
    </div>
  );
};

export default AssetExplorer;
