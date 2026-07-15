import React from 'react';

const CollectionTree: React.FC = () => {
  return (
    <div className="collection-tree" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px', color: '#888' }}>Collections</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ padding: '8px', fontSize: '13px' }}>📁 Brand Identity</div>
        <div style={{ padding: '8px', fontSize: '13px' }}>📁 Social Media 2026</div>
      </div>
    </div>
  );
};

export default CollectionTree;
