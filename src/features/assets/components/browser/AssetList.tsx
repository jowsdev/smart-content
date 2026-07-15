import React from 'react';
import { Asset } from '../../types/asset.types';

interface AssetListProps {
  assets: Asset[];
}

const AssetList: React.FC<AssetListProps> = ({ assets }) => {
  return (
    <div className="asset-list" style={{ padding: '20px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ borderBottom: '1px solid #333', textAlign: 'left' }}>
          <tr>
            <th style={{ padding: '12px' }}>Name</th>
            <th>Type</th>
            <th>Size</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {assets.map(asset => (
            <tr key={asset.id} style={{ borderBottom: '1px solid #222' }}>
              <td style={{ padding: '12px' }}>{asset.name}</td>
              <td>{asset.type}</td>
              <td>{(asset.size / 1024).toFixed(1)} KB</td>
              <td>{new Date(asset.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetList;
