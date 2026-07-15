import React from 'react';
import { Asset } from '../../types/asset.types';

interface AssetCardProps {
  asset: Asset;
}

const AssetCard: React.FC<AssetCardProps> = ({ asset }) => {
  return (
    <div className="asset-card" style={{
      background: '#1a1a1a',
      borderRadius: '8px',
      overflow: 'hidden',
      border: '1px solid #333',
      cursor: 'pointer'
    }}>
      <div style={{ aspectRatio: '1', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {asset.type === 'image' || asset.type === 'logo' ? '🖼️' : '🎬'}
      </div>
      <div style={{ padding: '12px' }}>
        <div style={{ fontSize: '13px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{asset.name}</div>
        <div style={{ fontSize: '11px', color: '#666', marginTop: '4px' }}>{asset.format.toUpperCase()} • {(asset.size / 1024).toFixed(0)} KB</div>
      </div>
    </div>
  );
};

export default AssetCard;
