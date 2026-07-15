import React from 'react';

const AssetFilters: React.FC = () => {
  return (
    <div className="asset-filters" style={{ padding: '12px 20px', borderBottom: '1px solid #333', display: 'flex', gap: '12px' }}>
      <select style={{ background: '#111', color: '#fff', border: '1px solid #333', padding: '6px 12px', borderRadius: '4px' }}>
        <option>All Types</option>
        <option>Images</option>
        <option>Videos</option>
      </select>
      <select style={{ background: '#111', color: '#fff', border: '1px solid #333', padding: '6px 12px', borderRadius: '4px' }}>
        <option>Latest First</option>
        <option>Oldest First</option>
      </select>
    </div>
  );
};

export default AssetFilters;
