import React from 'react';
import { Asset } from '../../types/asset.types';
import AssetCard from './AssetCard';

interface AssetGridProps {
  assets: Asset[];
}

const AssetGrid: React.FC<AssetGridProps> = ({ assets }) => {
  return (
    <div className="asset-grid" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
      gap: '20px',
      padding: '20px'
    }}>
      {assets.map(asset => (
        <AssetCard key={asset.id} asset={asset} />
      ))}
    </div>
  );
};

export default AssetGrid;
