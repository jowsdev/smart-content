import React from 'react';
import { Asset } from '../../types/asset.types';

interface AssetMetadataProps {
  asset: Asset;
}

const AssetMetadata: React.FC<AssetMetadataProps> = ({ asset }) => {
  return (
    <div className="asset-metadata">
      <h4 style={{ fontSize: '14px', marginBottom: '12px', color: '#888' }}>Metadata</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Format</span>
          <span>{asset.format}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Size</span>
          <span>{(asset.size / 1024).toFixed(1)} KB</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Created</span>
          <span>{new Date(asset.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default AssetMetadata;
