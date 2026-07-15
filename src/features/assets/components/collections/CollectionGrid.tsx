import React from 'react';

const CollectionGrid: React.FC = () => {
  return (
    <div className="collection-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '16px', padding: '16px' }}>
      <div style={{ background: '#1a1a1a', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
        <div style={{ fontSize: '24px', marginBottom: '8px' }}>📁</div>
        <div style={{ fontSize: '13px' }}>Campaign A</div>
      </div>
    </div>
  );
};

export default CollectionGrid;
