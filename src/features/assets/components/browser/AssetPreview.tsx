import React from 'react';
import { Asset } from '../../types/asset.types';

interface AssetPreviewProps {
  asset: Asset;
}

const AssetPreview: React.FC<AssetPreviewProps> = ({ asset }) => {
  return (
    <div className="asset-preview" style={{ padding: '24px', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '64px', marginBottom: '16px' }}>
          {asset.type === 'video' ? '🎬' : '🖼️'}
        </div>
        <h3>{asset.name}</h3>
        <p style={{ color: '#666' }}>{asset.format} • {asset.metadata.resolution || 'Original'}</p>
      </div>
    </div>
  );
};

export default AssetPreview;
