import React from 'react';
import { Asset } from '../../types/asset.types';
import AssetMetadata from './AssetMetadata';
import AssetUsage from './AssetUsage';

interface AssetInspectorProps {
  asset: Asset;
}

const AssetInspector: React.FC<AssetInspectorProps> = ({ asset }) => {
  return (
    <div className="asset-inspector" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <AssetMetadata asset={asset} />
      <AssetUsage asset={asset} />
    </div>
  );
};

export default AssetInspector;
