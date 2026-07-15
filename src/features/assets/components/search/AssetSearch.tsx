import React from 'react';

const AssetSearch: React.FC = () => {
  return (
    <div className="asset-search" style={{ padding: '16px 20px' }}>
      <input
        type="text"
        placeholder="Search assets by name or tag..."
        style={{ width: '100%', background: '#111', border: '1px solid #333', borderRadius: '4px', padding: '12px 16px', color: '#fff' }}
      />
    </div>
  );
};

export default AssetSearch;
